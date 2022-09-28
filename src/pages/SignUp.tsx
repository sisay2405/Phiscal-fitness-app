import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useAuth, { useAppDispatch } from '../utils/useAuths';
import { signUp } from '../utils/firebase';
import { setAuthError } from '../store/userSlice';
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
const FormWrapper = styled.form`
  text-align: center;
  label {
    display: block;
    font-weight: 700;
  }
  input {
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 30%;
  }
  button {
    margin-left: 0;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
  }
  body {
    background: #fff;
    font-family: 'PT Sans', sans-serif;
  }
  h2 {
    padding-top: 1.5rem;
  }
  a {
    color: #333;
  }
  a:hover {
    color: #da5767;
    text-decoration: none;
  }
  .card {
    border: 0.4rem solid #f8f9fa;
    top: 10%;
  }
  .form-control {
    background-color: #f8f9fa;
    padding: 20px;
    padding: 25px 15px;
    margin-bottom: 1.3rem;
  }

  .form-control:focus {
    color: #000000;
    background-color: #ffffff;
    border: 3px solid #da5767;
    outline: 0;
    box-shadow: none;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    background: #da5767;
    border: 2px solid #da5767;
  }
  .btn-primary:hover {
    background-color: #df8c96;
    border-color: #df8c96;
    transition: 0.3s;
  }
  .title_container {
    text-align: center;
    padding-bottom: 15px;
    margin-top: 50px;
    font-weight: 600;
  }
  .registartionForm {
    font-size: 1.5em;
    line-height: 1.5em;
    margin: 10px;
  }
`;
function Signup() {
  const dispatch = useAppDispatch();
  const { authError } = useAuth();
  const [formData, setFormData] = useState(formDefaults);
  const { firstName, lastName, email, password, verifyPassword } = formData;
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
      {authError && <Error message={authError} />}
      <FormWrapper onSubmit={handleSubmit}>
        <div className="title_container">
          <div className="registartionForm">Registration Form</div>
        </div>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            type="firstName"
            name="firstName"
            value={firstName}
            placeholder="First Name"
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
            placeholder="Last Name"
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
            placeholder="***********"
            required
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="verifyPassword">
          Confirm Password:
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
        <button type="submit">Submit</button>
      </FormWrapper>
      <p>
        Already registered? <Link to="/signin">Sign in</Link> instead!
      </p>
    </main>
  );
}
export default Signup;
