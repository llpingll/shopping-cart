import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <MainContainer>
      <WrapperDiv>
        <p>Your favorite mock online games store!</p>
        <p>Click here to get started!</p>
        <Link to="/store">
          <button type="button">Shop Now</button>
        </Link>
      </WrapperDiv>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-basis: 80%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10rem;
  padding: 0 4rem;
  color: ${({ theme }) => theme.colors.text};
`;

const WrapperDiv = styled.div`
  background-color: rgba(240, 248, 255, 0.1);
  padding: 3rem;
  border-radius: 3rem;

  & p {
    padding-bottom: 2rem;
  }

  & button {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.purple};
    padding: 2rem;
    border-radius: 3rem;
    transition: transform 0.15s ease-in-out;
  }

  & button:hover {
    transform: scale(1.1);
  }
`;

export default Main;
