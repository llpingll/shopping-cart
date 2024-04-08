import { useState, createContext } from "react";
const GAMES_URL = "https://api.rawg.io/api/games";

export const GameContext = createContext();

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [option, setOption] = useState("");
  const [optionHeading, setOptionHeading] = useState("All time best");
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);

  const addToCart = (game) => {
    if (!cart.some((item) => item.name === game.name)) {
      setCart([...cart, game]);
    }
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

  // const updateInCart = (game) => {
  //   if (cart.includes(game)) {
  //     setGames(
  //       games.map((item) => {
  //         if (item === game) {
  //           item = { ...game, inCart: !item.inCart };
  //         }
  //       })
  //     );
  //   }
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
    optionHeading,
    setOptionHeading,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
