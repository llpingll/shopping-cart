import styled from "styled-components";
import Game from "./Game";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Games = ({ games }) => {
  const { optionHeading } = useContext(GameContext);

  return (
    <GamesWrapper>
      <p>{optionHeading}</p>
      <GamesContainer>
        {games && games.map((game) => <Game game={game} key={game.id} />)}
      </GamesContainer>
    </GamesWrapper>
  );
};

const GamesWrapper = styled.div`
  width: calc(100% - 30rem);

  & p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 4rem;
    font-weight: 600;
    margin-top: -1.1rem;
    margin-bottom: 1rem;
  }
`;

const GamesContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  color: ${({ theme }) => theme.colors.text};
`;

export default Games;
