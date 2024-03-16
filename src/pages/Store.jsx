import Header from "../components/Header";
import Aside from "../components/Aside";
import Games from "../components/Games";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useGameProvider } from "../components/context/GameContext";

const APIKEY = "a08052b0ccda4e9f949c07103f97ca68";
const URL = "https://api.rawg.io/api/games";

const Store = () => {
  const [error, setError] = useState(null);
  const { games, setGames } = useGameProvider();

  useEffect(() => {
    getGames();
    // console.log(games);
  }, []);

  const getGames = async () => {
    try {
      const response = await fetch(`${URL}?key=${APIKEY}&page_size=20`);

      if (response.status >= 400) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setGames(data.results);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Header></Header>
      <Main>
        <Aside></Aside>
        <Games games={games} />
      </Main>
      <Footer></Footer>
    </>
  );
};

const Main = styled.div`
  display: flex;
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

export default Store;
