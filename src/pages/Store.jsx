import Header from "../components/Header";
import Aside from "../components/store/Aside";
import Games from "../components/store/Games";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";
import { useFetch } from "../components/utilities/apiQueries";
import { Cart } from "../components/cart/Cart";

const Store = () => {
  const { games, setGames, GAMES_URL } = useContext(GameContext);

  const { data, error, loading } = useFetch(GAMES_URL, "games");

  if (loading || error) return; // potentially display loading animation

  setGames(data);

  return (
    <StoreWrapper>
      <Header></Header>
      <Main>
        <Aside />
        <Games games={games}></Games>
      </Main>
      <Footer></Footer>
      <Cart />
    </StoreWrapper>
  );
};

const StoreWrapper = styled.div`
  @media (max-width: 735px) {
  }
`;

const Main = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

export default Store;
