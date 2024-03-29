import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaPlaystation,
  FaApple,
  FaXbox,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
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

  const assignIcons = (platform) => {
    switch (platform) {
      case "PC":
        return <FaWindows key={platform} />;
      case "PlayStation":
        return <FaPlaystation key={platform} />;
      case "Xbox":
        return <FaXbox key={platform} />;
      case "Linux":
        return <FaLinux key={platform} />;
      case "macOS":
        return <FaApple key={platform} />;
      case "Nintendo":
        return <BsNintendoSwitch key={platform} />;
      case "Android":
        return <IoLogoAndroid key={platform} />;
      default:
        return null;
    }
  };

  const generatePrice = () => {
    return `$${(Math.random() * (61 - 5) + 5).toFixed(2)}`;
  };

  return (
    <GameContainer>
      <Link to={`/store/${game.id}`}>
        <Image src={game.background_image} />
      </Link>
      <InfoContainer>
        <ButtonContainer>
          <button>Add to cart +</button>
          {generatePrice()}
        </ButtonContainer>
        <Icons>{getPlatforms().map((platform) => assignIcons(platform))}</Icons>
        <GameLink to={`/store/${game.id}`}>
          <h2>{game.name}</h2>
        </GameLink>
      </InfoContainer>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: CALC(100% - 17rem);
  border-radius: 3rem 3rem 0 0;
  cursor: pointer;
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
  font-size: 2rem;

  & button {
    background-color: inherit;
  }
`;

const Icons = styled.div`
  font-size: 2rem;

  & svg {
    margin-right: 0.5rem;
  }
`;
const GameLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
`;
export default Game;
