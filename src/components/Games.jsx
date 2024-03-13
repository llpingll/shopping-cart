import styled from "styled-components";
import Game from "./Game";
// import { useParams } from "react-router-dom";

const Games = ({ games }) => {
  // console.log(games);
  return (
    <GamesContainer>
      {games && games.map((game) => <Game game={game} key={game.id} />)}
    </GamesContainer>
  );
};

const GamesContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  /* flex-grow: 1; */
  max-width: calc(100% - 22rem);
  border: solid 2px white;
  color: white;
`;

export default Games;
