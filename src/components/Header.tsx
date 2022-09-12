import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #F0A514;
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

const NavWrapper = styled.nav`
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
    color: #fefefe;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: lightgrey;
    }
    &.active {
      color: #009900;
      font-style: italic;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Phisical Exercise</h1>
      </Link>
      <NavWrapper>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">SignUp</NavLink>
          </li>
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
