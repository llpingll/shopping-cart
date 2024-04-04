import { useState, useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";

const APIKEY = "a08052b0ccda4e9f949c07103f97ca68";

export const useFetch = (URL, query) => {
  const { option } = useContext(GameContext);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let apiUrl;

  if (query === "profile") apiUrl = `${URL}?key=${APIKEY}`;
  if (query === "games") apiUrl = `${URL}?key=${APIKEY}${option}`;

  useEffect(() => {
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
    getData();
  }, [option, apiUrl]);

  return { data, error, loading };
};
