import { useState, createContext } from "react";
const GAMES_URL = "https://api.rawg.io/api/games";

export const GameContext = createContext();

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [option, setOption] = useState("");

  const value = {
    GAMES_URL,
    games,
    setGames,
    option,
    setOption,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
