import styled from "styled-components";
import Game from "./Game";
import PropTypes from "prop-types";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Games = ({ games }) => {
  const { activeOption } = useContext(GameContext);

  return (
    <GamesWrapper>
      <p>{activeOption}</p>
      <GamesContainer>
        {games && games.map((game) => <Game game={game} key={game.id} />)}
      </GamesContainer>
    </GamesWrapper>
  );
};

const GamesWrapper = styled.div`
  width: calc(100% - 30rem);

  @media (max-width: 800px) {
    width: 85%;
  }

  & p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 4rem;
    font-weight: 600;
    margin-top: -1.1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
      text-align: center;
    }
  }
`;

const GamesContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  color: ${({ theme }) => theme.colors.text};
`;

Games.propTypes = {
  games: PropTypes.array,
};

export default Games;
