import Header from "../components/Header";
import Aside from "../components/store/Aside";
import Games from "../components/store/Games";
import Footer from "../components/Footer";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";
import { useFetch } from "../components/utilities/apiQueries";
import { Cart } from "../components/cart/Cart";

const Store = () => {
  const { games, setGames, GAMES_URL, activeHamburger, setActiveHamburger } =
    useContext(GameContext);

  const { data, error, loading } = useFetch(GAMES_URL, "games");

  if (loading || error) return; // potentially display loading animation

  setGames(data);

  return (
    <>
      <Header></Header>
      <Main>
        <Aside />
        <Games games={games}></Games>
      </Main>
      <Footer></Footer>
      <Cart />
      <HamburgerIcon onClick={() => setActiveHamburger(!activeHamburger)}>
        <RxHamburgerMenu />
      </HamburgerIcon>
    </>
  );
};

const Main = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 4rem;
  margin-bottom: 5rem;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 0;
    margin: 0 0 5rem 0;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  font-size: 35px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

export default Store;
