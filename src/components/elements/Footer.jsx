import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterDiv>
      <p>||Ping|| © 2024</p>
      <Link href="https://github.com/llpingll">
        <FaGithub />
      </Link>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.text};
`;

const Link = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.textActive};
  }
`;

export default Footer;
