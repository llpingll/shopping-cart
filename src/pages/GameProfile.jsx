import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GameProfile = () => {
  const { games } = useContext(GameContext);

  const params = useParams();

  const game = games.find((game) => game.id == params.gameId);

  return (
    <ProfileContainer>
      <Header></Header>
      <GameHeader>
        <StoreLink to="/store">
          <IoMdArrowBack />
          Store
        </StoreLink>
        <span>{game.name}</span>
      </GameHeader>
      <Main>
        <Silder></Silder>
        <InfoContainer>
          <Info>
            <Description></Description>
            <More></More>
          </Info>
          <CartInfo></CartInfo>
        </InfoContainer>
      </Main>
      <Footer></Footer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const GameHeader = styled.div`
  //
`;

const StoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
`;

const Main = styled.div`
  //
`;

const Silder = styled.div`
  //
`;

const InfoContainer = styled.div`
  //
`;

const Info = styled.div`
  //
`;

const Description = styled.div`
  //
`;

const More = styled.div`
  //
`;

const CartInfo = styled.div`
  //
`;

export default GameProfile;
