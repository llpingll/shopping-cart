import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export const Gameprovider = ({ children }) => {
  const [games, setGames] = useState([]);

  const value = {
    games,
    setGames,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameProvider = () => useContext(GameContext);
