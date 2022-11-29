import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import Logo from '../../assets/images/Logo.png';
import NavLinks from '../../features/components/NavLinks';

const StyleHeaderWrapper = styled.header`
  overflow: hidden !important;
  align-items: center;
  background-color: #e8fffa;
  color: #ff731d;
  justify-content: space-between;
  box-shadow: -1px 9px 59px -21px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 9px 59px -21px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 9px 59px -21px rgba(0, 0, 0, 0.31);
  a {
    color: #2a8572;
    text-decoration: none;
  }
  h1 {
    margin: 1rem 0;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  span {
    padding: 0 1rem;
  }
  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 1.5rem;
    & > a {
      color: #fefefe;
      text-decoration: none;
    }
  }
`;

const MobileMenu = styled.div`
  color: #ff731d;
  @media (min-width: 700px) {
    display: none !important;
  }
`;
const NavWrapper = styled.nav`
  display: none !important;
  @media (min-width: 700px) {
    display: block !important;
  }
`;
function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(true);
  return (
    <StyleHeaderWrapper>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <span>
              <img src={Logo} alt='Logo' />
            </span>
          </Link>
          <Link to='/'>
            <h1>Phisical Exercise</h1>
          </Link>
        </div>
        <NavWrapper>
          <NavLinks />
        </NavWrapper>
        <MobileMenu>
          {toggleMenu && (
            <BiMenu
              size={40}
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          )}
          {!toggleMenu && (
            <ImCancelCircle
              size={40}
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          )}
        </MobileMenu>
      </nav>
    </StyleHeaderWrapper>
  );
}

export default Navbar;
