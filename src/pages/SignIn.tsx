/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-string-refs */
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import React, { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error';
import { signIn, signInWithGoogle } from '../utils/firebase';
import useAuth from '../utils/useAuths';
import useProfileRedirect from '../utils/useProfileRedirect';

const formDefaults = { email: '', password: '' };
const FormWrapper = styled.form`
  text-align: center;
  label {
    display: block;
    font-weight: 700;
  }
  input {
    margin-bottom: 2rem;
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
  form {
    border: 2px solid skyblue;
    padding: 30px;
  }

  .App-header {
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
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
function SignIn() {
  const { user, authError } = useAuth();
  const [formData, setFormData] = useState(formDefaults);
  const { email, password } = formData;
  useProfileRedirect();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  console.log({ authError });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn({ email, password });
    setFormData(formDefaults);
  };
  const handleGoogleSignIn = async () => {
    try {
      signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Error message={authError} />
      <FormWrapper onSubmit={handleSubmit}>
        <div className="title_container">
          <div className="registartionForm">Sign In Form </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="Enter email address.."
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" name="password" value={password} placeholder="S3cr3tPW!" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
        <div>
          <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </FormWrapper>
      <p>
        Need to register? <Link to="/signup">Sign up</Link> instead!
      </p>
    </main>
  );
}
export default SignIn;
