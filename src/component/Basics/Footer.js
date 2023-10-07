// Import React and styled-components
import React from "react";
import styled from "styled-components";

// Define the styled components for the footer elements
const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }
`;

const FooterCopy = styled.p`
  margin-top: 10px;
`;

// Define the footer component
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src="logo192.png" alt="React Logo" />
      <FooterLinks>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks>
      <FooterCopy>© 2023 React Footer. All rights reserved.</FooterCopy>
    </FooterWrapper>
  );
};

// Export the footer component
export default Footer;
