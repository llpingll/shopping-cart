import { useParams } from "react-router-dom";
import { useGameProvider } from "../components/context/GameContext";
// import { useContext } from "react";
// import { GameContext } from "./Store";

const GameProfile = () => {
  const { games } = useGameProvider();

  const params = useParams();

  const game = games.find((game) => game.id == params.gameId);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default GameProfile;
