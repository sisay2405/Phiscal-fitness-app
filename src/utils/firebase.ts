import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutUser,
  User as FirebaseUser,
} from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { setExercises } from 'store/exercisesSlice';
import { Exercise } from './type';

import store from '../store';
import { clearUser, setAuthError, setUser } from '../store/userSlice';

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
const provider = new GoogleAuthProvider();

// export const googleSignIn = () => {
//   const googleAuthProvider = new GoogleAuthProvider();

// signInWithPopup(auth, googleAuthProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     console.log(credential)
//     // const token = credential.accessToken;
//     // The signed-in user info.
//     // const user = result.user;
//     // ...
//   }).catch((error) => {
//     console.log(error)
//     // Handle Errors here.
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // The email of the user's account used.
//     // const email = error.customData.email;
//     // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
//   return signInWithPopup(auth, googleAuthProvider);

// }

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      if (!result) return;

      // The signed-in user info.

      // localStorage.setItem('name', JSON.stringify(name));
      // localStorage.setItem('email', JSON.stringify(email));

      const plainUserEntries = Object.entries(result.user).filter(([, value]) => typeof value !== 'object');
      const plainUser = Object.fromEntries(plainUserEntries);

      localStorage.setItem('token', await result.user.getIdToken());
      localStorage.setItem('user', JSON.stringify(plainUser));

      store.dispatch(setUser(result.user));
    })
    .catch((error) => {
      console.log(error);
    });
};
const dispatchError = (err: any) => {
  return store.dispatch(setAuthError(err));
};

const updateUser = async (user: FirebaseUser) => {
  if (user) {
    const docRef = doc(db, 'users', user.email as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // const userDoc = docSnap.data();
      // return store.dispatch(setUser({ ...userDoc ));
      return store.dispatch(setUser(user));
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

export const googleSignin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        throw new Error('Error: invalid credentials');
      }
      // const token = credential.accessToken;
      // The signed-in user info.
      const { user } = result;
      updateUser(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.

      console.log(error);

      // ...
    });
};

const signOut = async () => {
  try {
    await signOutUser(auth);
    localStorage.removeItem('token');
  } catch ({ message }) {
    dispatchError(message);
  }
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    await updateUser(user);
    store.dispatch(setUser(user));
  } else {
    store.dispatch(clearUser());
  }
});

export const exerciseStore = () => {
  const fetch = () => {
    return getDocs(collection(db, 'exercises')).then(({ docs }) => {
      const exercises = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log({ docs, exercises });
      return store.dispatch(setExercises(exercises));
    });
  };
  const createOrUpdate = ({ id = '', ...exercise }: Exercise) => {
    console.log({ exercise }, 'createOrUpdate.fired');
    if (!id?.length) {
      return addDoc(collection(db, 'exercises'), exercise).then(() => fetch());
    }
    const exerciseDoc = doc(db, 'exercises', id);
    updateDoc(exerciseDoc, exercise).then(() => fetch());
  };

  const remove = ({ id = '' }: Exercise) => {
    deleteDoc(doc(db, 'exercises', `/${id}`)).then(() => {
      fetch();
    });
  };

  return { fetch, createOrUpdate, remove };
};

export { db, auth, signUp, signIn, signOut };
