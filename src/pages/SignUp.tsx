import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../utils/reduxHooks';
import { signUp } from '../utils/firebase';
import { setAuthError } from '../store/userSlice';
import useAuth from '../utils/useAuth';
import useProfileRedirect from '../utils/useProfileRedirect';
import Error from '../components/Error';

const formDefaults = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  verifyPassword: '',
  isAdmin: false,
};

function Signup() {
  const dispatch = useAppDispatch();
  const { authError } = useAuth();
  const [formData, setFormData] = useState(formDefaults);
  const { firstName, lastName, email, password, verifyPassword, isAdmin } = formData;
  useProfileRedirect();

  useEffect(() => {
    dispatch(setAuthError(''));
  }, [dispatch]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { verifyPassword, ...userData } = formData;

    if (password !== verifyPassword) {
      dispatch(setAuthError('Passwords do not match!'));
      setFormData({ ...formData, password: '', verifyPassword: '' });
    } else {
      await signUp(userData);
      setFormData(formDefaults);
    }
  };

  return (
    <main>
      <h2>Sign Up</h2>
      {authError && <Error message={authError} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            type="firstName"
            name="firstName"
            value={firstName}
            placeholder="Jane"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            type="lastName"
            name="lastName"
            value={lastName}
            placeholder="Doe"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="user@domain.com"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="S3cr3tPW!"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="verifyPassword">
          Password:
          <input
            id="verifyPassword"
            type="password"
            name="verifyPassword"
            value={verifyPassword}
            placeholder="S3cr3tPW!"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="isAdmin" className="checkbox">
          <input
            type="checkbox"
            id="isAdmin"
            name="isAdmin"
            value="true"
            checked={isAdmin}
            onChange={handleInputChange}
          />
          Set as admin
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already registered? <Link to="/signin">Sign in</Link> instead!
      </p>
    </main>
  );
}
export default Signup;
