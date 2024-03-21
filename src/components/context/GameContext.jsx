import { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

const useFetch = (URL, options = {}) => {
  const APIKEY = "a08052b0ccda4e9f949c07103f97ca68";
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let apiUrl = `${URL}?key=${APIKEY}`;

  if (options && options.params)
    apiUrl += `&${new URLSearchParams(options.params).toString()}`;

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);

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
  }, []);

  return { data, error, loading };
};

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const value = {
    games,
    setGames,
    useFetch,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
