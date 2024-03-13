import styled from "styled-components";
// import { Link } from "react-router-dom";

import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const Game = ({ game }) => {
  const getPlatforms = () => {
    const platformsToCheck = [
      "PC",
      "PlayStation",
      "Xbox",
      "Linux",
      "macOS",
      "Nintendo",
      "Android",
    ];

    const matchingPlatforms = [];

    for (let i = 0; i < game.platforms.length; i++) {
      for (let j = 0; j < platformsToCheck.length; j++) {
        const platformName = game.platforms[i].platform.name;
        if (new RegExp(platformsToCheck[j], "i").test(platformName)) {
          if (matchingPlatforms.includes(platformsToCheck[j])) {
            continue;
          }
          matchingPlatforms.push(platformsToCheck[j]);
        }
      }
    }

    return matchingPlatforms.sort(
      (a, b) => platformsToCheck.indexOf(a) - platformsToCheck.indexOf(b)
    );
  };

  const assignPlatformIcons = (platforms) => {
    const icons = platforms.map((platform) => {
      if (platform === "PC") return <FaWindows key={platform} />;
      if (platform === "PlayStation") return <FaPlaystation key={platform} />;
      if (platform === "Xbox") return <FaXbox key={platform} />;
      if (platform === "Linux") return <FaLinux key={platform} />;
      if (platform === "macOS") return <FaApple key={platform} />;
      if (platform === "Nintendo") return <BsNintendoSwitch key={platform} />;
      if (platform === "Android") return <IoLogoAndroid key={platform} />;
    });

    return icons;
  };

  // const sortPlatforms = (order) => {
  //   return order.sort((a,b) => order.indexOf(a) - order.indexOf(b))
  // }

  return (
    <GameContainer>
      <Image src={game.background_image} />
      <InfoContainer>
        <ButtonContainer>
          <button>Add to cart +</button>
          $20.00
        </ButtonContainer>
        <Icons>{assignPlatformIcons(getPlatforms())}</Icons>
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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    background-color: inherit;
    font-size: 2rem;
  }
`;

const Icons = styled.div`
  font-size: 2rem;

  & svg {
    margin-right: 0.5rem;
  }
`;
// const GameLink = styled(Link)`
//   //
// `;
export default Game;
