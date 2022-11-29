/* eslint-disable max-len */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    
    background-color: #fefefe;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 0;
    button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      width: 150px;
      background-color:#0a0a23;
      color: #fff;
      border:none;
      border-radius:10px;
    }
  }
  .newExerciseTitle {
    color: orange;
  }
  .ExerciseType {
    color: orange;
  }
  .login-with-google-btn {
    transition: background-color 0.3s, box-shadow 0.3s;
    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
  }
  .login-with-google-btn:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  .login-with-google-btn:active {
    background-color: #eeeeee;
  }
  .login-with-google-btn:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
  .login-with-google-btn:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  
.wrapper {
  width: 60%;
  height: 75%;
  -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  border-radius: 20px;
}


.left,.right{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.or{
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: bold;
}

.line{
  width: 0.5px;
  height: 70%;
  background-color: lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
}

.loginButton{
  width: 150px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}

.google{
  background-color: #df4930;
}
.facebook{
  background-color: #507cc0;
}
.github{
  background-color: black;
}

.icon{
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

input{
  width: 200px;
  padding: 15px 20px;
  margin-bottom: 20px;
}

.submit{
  width: 200px;
  background-color: rgba(128, 0, 128, 0.671);
  color: white;
  font-weight: bold;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
}

.loginTitle{
  position: absolute;
  top: 150px;
  color:lightgray
}

.link{
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: 992px) {
  .card {
    width: 100%;
    margin-bottom: 50px;
  }

  .wrapper {
    width: 65%;
    height: 90%;
    flex-direction: column;
  }

  .loginTitle {
    display: none;
  }

  .center {
    width: 100%;
    position: relative;
  }

  .left {
    padding: 20px;
  }

  .right {
    padding: 20px;
  }

  .line {
    height: 0.5px;
    width: 300px;
  }
}
`;

export const StyledNavLogoLink = styled.div`
  textdecoration: 'none';
  color: '#3A1212';
  borderbottom: '3px solid #FF2625';
  img {
    width: '48px';
    height: '48px';
    margin: '0 20px';
  }
`;

export default GlobalStyle;
