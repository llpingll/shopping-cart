import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styled from "styled-components";
import image from "../assets/Skin_Splash_Coven_Camille.webp";

const Home = () => {
  return (
    <BackgroundImg>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BackgroundImg>
  );
};

const BackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export default Home;
