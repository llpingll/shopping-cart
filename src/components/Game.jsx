import styled from "styled-components";
// import { Link } from "react-router-dom";

// import { FaPlaystation } from "react-icons/fa"; //<FaPlaystation />
// import { FaXbox } from "react-icons/fa"; //<FaXbox />
// import { FaWindows } from "react-icons/fa"; //<FaWindows />
// import { BsNintendoSwitch } from "react-icons/bs"; //<BsNintendoSwitch />
// import { FaLinux } from "react-icons/fa"; //<FaLinux />
// import { FaApple } from "react-icons/fa"; //<FaApple />

const Game = ({ game }) => {
  // const getPlatforms = (game.platforms) => {

  // }

  return (
    <GameContainer>
      <Image src={game.background_image} />
      <InfoContainer>
        <ButtonContainer>
          <button>Add to cart +</button>
          $20.00
        </ButtonContainer>
        <div>Platforms</div>
        <h2>{game.name}</h2>
      </InfoContainer>
    </GameContainer>
  );
};

const GameContainer = styled.div``;

const Image = styled.img`
  object-fit: cover;
  height: CALC(100% - 17rem);
  border-radius: 3rem 3rem 0 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  padding: 2rem;
  height: 17rem;
  border-radius: 0 0 3rem 3rem;

  & div {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    background-color: inherit;
    font-size: 2rem;
  }
`;

// const GameLink = styled(Link)`
//   //
// `;
export default Game;
