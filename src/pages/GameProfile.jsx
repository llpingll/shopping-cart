import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GameContext } from "../components/context/GameContext";
import { IoMdArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useFetch } from "../components/utilities/apiQueries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import ImageSlider from "../components/gameprofile/ImageSlider";

const GameProfile = () => {
  const [expanded, setExpanded] = useState(false);
  const { games, GAMES_URL } = useContext(GameContext);

  const params = useParams();
  const game = games.find((game) => game.id == params.gameId);
  const { data, error, loading } = useFetch(
    `${GAMES_URL}/${game.id}`,
    "profile"
  );

  if (loading || error) return; // potentially display loading animation

  const getDetails = (info) => {
    switch (info) {
      case "platforms":
        return data.parent_platforms
          .map((platform) => platform.platform.name)
          .join(", ");

      case "genres":
        return data.genres.map((genre) => genre.name).join(", ");

      case "developers":
        return data.developers.map((developer) => developer.name).join(", ");

      case "publishers":
        return data.publishers.map((publisher) => publisher.name).join(", ");

      default:
        return "";
    }
  };

  const gameInfo = [
    [`Website: ${data.website}`],
    [`Released: ${data.released}`],
    [`Genres: ${getDetails("genres")}`],
    [`Platforms: ${getDetails("platforms")}`],
    [`Developers: ${getDetails("developers")}`],
    [`Publishers: ${getDetails("publishers")}`],
  ];

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
          <div>
            <Description>
              Description
              <p>{data.description_raw}</p>
            </Description>
            <More>
              {expanded && (
                <p>
                  {gameInfo &&
                    gameInfo.map((info) => (
                      <>
                        {info} <br />
                      </>
                    ))}
                </p>
              )}
              <div onClick={() => setExpanded(!expanded)}>
                More {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </More>
          </div>
          <CartInfo>
            <p>$Price</p>
            <div>Add to cart +</div>
          </CartInfo>
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
  gap: 5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  & p {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  max-height: 40rem;
  line-height: 1.3;
  padding: 2rem 2rem 0;
  overflow: auto;
  scrollbar-width: none;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  border-radius: 2rem 2rem 0 0;
  position: relative;

  & p {
    font-weight: 400;
    margin-top: 2rem;
  }
`;

const More = styled.div`
  padding: 2rem;
  line-height: 1.3;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  border-radius: 0 0 2rem 2rem;

  & p {
    word-break: break-all;
    padding-bottom: 1.1rem;
    color: grey;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  font-size: 2rem;
  border-radius: 2rem;

  & div {
    cursor: pointer;
  }
`;

export default GameProfile;
