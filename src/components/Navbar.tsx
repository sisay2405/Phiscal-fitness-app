import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from 'utils/useAuths';
import { Stack } from '@mui/system';
import { signOut } from '../utils/firebase';

const StyleHeaderWrapper = styled.header`
  align-items: center;
  background-color: #f0a514;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  & > a {
    color: #fefefe;
    text-decoration: none;
  }
  h1 {
    margin: 1rem 0;
  }
  span {
    padding: 0 1rem;
  }
`;

const StyleNavWrapper = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 1.5rem;
    &:first-child {
      padding-left: 0;
    }
  }
  a {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: lightgrey;
    }
    &.active {
      color: black;
      font-style: italic;
    }
  }
  .logoutbutton {
    color: red;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    console.log('logout working');
    // !user
    navigate('/');
  };
  return (
    <StyleHeaderWrapper>
      <Link to="/">
        <Stack direction="row" sx={{ marginRight: 'cacl( 8 *4px )' }}>
          <h1>Phisical Exercise</h1>
        </Stack>
      </Link>

      <StyleNavWrapper>
        <ul>
          {!user && (
            <>
              <li>
                <NavLink to="/signIn">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/exercises">Exercises</NavLink>
              </li>
              <li>
                <NavLink to="/profile">{user.displayName}</NavLink>
              </li>
              <li>
                <div className="logoutbutton">
                  <button type="button" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </div>
              </li>
            </>
          )}
        </ul>
      </StyleNavWrapper>
    </StyleHeaderWrapper>
  );
}

export default Navbar;
