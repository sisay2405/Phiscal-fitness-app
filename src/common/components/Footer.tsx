import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #2a8572;
  color: #fefefe;
  padding: 0.4rem 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.8rem;
  overflow: hidden !important;
`;

function Footer() {
  return <FooterWrapper>Sisay © {new Date().getFullYear()}</FooterWrapper>;
}

export default Footer;
