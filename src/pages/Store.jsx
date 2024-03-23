import Header from "../components/Header";
import Aside from "../components/store/Aside";
import Games from "../components/store/Games";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";

const GAMES_URL = "https://api.rawg.io/api/games";

const Store = () => {
  const { games, setGames, useFetch } = useContext(GameContext);

  const { data, error, loading } = useFetch(GAMES_URL);

  if (loading) return; // potentially display loading animation

  setGames(data.results);

  return (
    <>
      <Header></Header>
      <Main>
        <Aside />
        <Games games={games}></Games>
      </Main>
      <Footer></Footer>
    </>
  );
};

const Main = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

export default Store;
