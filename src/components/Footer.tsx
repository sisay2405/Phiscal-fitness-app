import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #F0A514;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  bottom:0;
  width:100%;
  font-size:30px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Sisay © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
