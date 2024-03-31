import { useState, useEffect, createContext } from "react";
const GAMES_URL = "https://api.rawg.io/api/games";

export const GameContext = createContext();

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("");

  const useFetch = (URL) => {
    const APIKEY = "a08052b0ccda4e9f949c07103f97ca68";
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    let apiUrl = `${URL}?key=${APIKEY}${option}`;

    const getData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log(apiUrl);

        if (response.status >= 400) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, [option]);

    return { data, error, loading };
  };

  const value = {
    games,
    setGames,
    useFetch,
    query,
    setQuery,
    GAMES_URL,
    option,
    setOption,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
