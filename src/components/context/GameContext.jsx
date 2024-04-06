import { useState, createContext } from "react";
const GAMES_URL = "https://api.rawg.io/api/games";

export const GameContext = createContext();

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [option, setOption] = useState("");
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeCartItem = (name) => {
    setCart(
      cart.filter((item) => {
        if (name !== item.name) {
          return item;
        }
      })
    );
  };

  // const isItemInCart = (game) => {
  //   return cart.includes(game);
  // };

  const value = {
    GAMES_URL,
    games,
    setGames,
    option,
    setOption,
    cart,
    setCart,
    activeCart,
    setActiveCart,
    addToCart,
    removeCartItem,
    // isItemInCart,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
