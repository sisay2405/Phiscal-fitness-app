import { initializeApp } from 'firebase/app';
import {
  User as FirebaseUser,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutUser,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { setUser, clearUser, setAuthError } from '../store/userSlice';
import store from '../store';

type User = {
  email: string;
  password: string;
};

type NewUser = User & {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const dispatchError = (err: any) => {
  return store.dispatch(setAuthError(err));
};

const getUserData = async (user: FirebaseUser) => {
  if (user) {
    const docRef = doc(db, 'users', user.email as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userDoc = docSnap.data();
      return store.dispatch(setUser({ ...userDoc, isAuthenticated: true }));
    }
  }

  dispatchError('User data not found!');
};

const signUp = async ({ firstName, lastName, email, password, isAdmin = false }: NewUser) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', email), {
      firstName,
      lastName,
      email,
      isAdmin,
    });
  } catch ({ message }) {
    dispatchError(message);
  }
};

const signIn = async ({ email, password }: User) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch ({ message }) {
    dispatchError(message);
  }
};

const signOut = async () => {
  try {
    await signOutUser(auth);
  } catch ({ message }) {
    dispatchError(message);
  }
};

onAuthStateChanged(auth, async (user: FirebaseUser | null) => {
  if (user) {
    await getUserData(user);
  } else {
    store.dispatch(clearUser());
  }
});

export { db, auth, signUp, signIn, signOut };
