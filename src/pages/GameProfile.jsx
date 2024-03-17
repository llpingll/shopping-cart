import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSlider from "../components/gameprofile/ImageSlider";

const GameProfile = () => {
  const { games } = useContext(GameContext);

  const params = useParams();

  const game = games.find((game) => game.id == params.gameId);
  console.log(game);

  return (
    <ProfileContainer>
      <Header></Header>
      <GameHeader>
        <StoreLink to="/store">
          <IoMdArrowBack />
          Store
        </StoreLink>
        <Title>{game.name}</Title>
      </GameHeader>
      <Main>
        <ImageSlider slides={game.short_screenshots} />
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* border: 2px solid white; */
  color: ${({ theme }) => theme.colors.text};
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

const StoreLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.span`
  font-size: 5rem;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 0 4rem;
  margin-bottom: 5rem;
  /* border: 2px solid white; */
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  border: 2px solid white;
`;

const Info = styled.div`
  //
`;

const Description = styled.div`
  border: 2px solid white;
`;

const More = styled.div`
  border: 2px solid white;
`;

const CartInfo = styled.div`
  //
`;

export default GameProfile;
