import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../utils/reduxHooks';
import { signIn, signInWithGithub, signInWithGoogle } from '../../utils/firebase';
import { setAuthError } from '../slices/userSlice';
import useAuth from '../../utils/useAuths';
import useProfileRedirect from '../../utils/useProfileRedirect';
import Error from '../../common/components/Error';
import physcial_girl from '../../assets/images/3P1et-.gif';
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import Github from "../../assets/images/githublogin.png";

const formDefaults = { email: '', password: '' };
const Wrapper = styled.div`
  border: solid 1px white;
  box-shadow: -5px 16px 87px -32px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: -5px 16px 87px -32px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: -5px 16px 87px -32px rgba(0, 0, 0, 0.42);
  margin: 10px auto;
  border-radius: 20px;
  overflow-x: hidden;
  display: flex;
  width: 85%;
  margin: 50px auto;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 1rem;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    width: 70%;
    padding-left: 40px;
  }
  color: #2a8572;
  main {
    h2 {
      color: #0b846a;
      font-size: 2rem;
    }
    padding: 0px;
    margin: 0px;
    margin: auto;
    form {
      display: flex;
      flex-direction: column;
      label {
        display: block;
        margin-bottom: 9px;
        font-weight: 600;
        font-size: 0.9rem;
        input {
          display: block;
          padding: 10px 8px;
          max-width: 300px;
          min-width: 250px;
          margin: 5px 0px;
          border: none;
          border-radius: 8px;
          border: solid 1px lightgray;
          &:focus {
            outline: solid 1px lightblue;
          }
        }
      }
      button {
        background-color: #2a8572;
        padding: 10px 0px;
        width: 250px;
        border: none;
        color: white;
        font-weight: 700;
        border-radius: 20px;
        margin: 20px 0px;
        border: 1px solid #2a8572;
        &:hover {
          background-color: white;
          color: #2a8572;
        }
      }
    }
  }
`;
const ImageWrapper = styled.div`
  overflow: hidden;
  background-color: #2a8572;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 0.9rem gray);
  }
`;
function SignIn() {
  const dispatch = useAppDispatch();
  const { authError } = useAuth();
  const [formData, setFormData] = useState(formDefaults);
  const { email, password } = formData;
  useProfileRedirect();
  useEffect(() => {
    dispatch(setAuthError(''));
  }, [dispatch]);

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
  const handleGithubSignIn = async () => {
    try {
      signInWithGithub();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <main>
        <h2>Sign In</h2>
        {authError && <Error message={authError} />}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              Email:
              <input
                id='email'
                type='email'
                name='email'
                className='form-control'
                value={email}
                placeholder='Enter email address..'
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label htmlFor='password'>
            Password:
            <input
              id='password'
              type='password'
              name='password'
              value={password}
              placeholder='S3cr3tPW!'
              onChange={handleInputChange}
            />
          </label>
          <button type='submit' data-testid='custom-element'>
            Submit
          </button>
          <div>
            <button type='button' className='login-with-google-btn' onClick={handleGoogleSignIn}>
              Sign in with Google
            </button>
          </div>
          <div>
            <button type='button' className='login-with-github-btn' onClick={handleGithubSignIn}>
              Sign in with Github
            </button>
          </div>
        </form>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={handleGoogleSignIn}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={handleGithubSignIn}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={handleGithubSignIn}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
        <p>
          Need to register? <Link to='/signup'>Sign up</Link> instead!
        </p>
      </main>
      <ImageWrapper>
        <img src={physcial_girl} alt='physcial_girl' />
      </ImageWrapper>
    </Wrapper>
  );
}
export default SignIn;
