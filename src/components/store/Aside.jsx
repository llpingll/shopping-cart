import { FaPlaystation, FaApple, FaXbox, FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { IoIosPodium } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import styled from "styled-components";
import { RiBoxingFill } from "react-icons/ri";
import { FaChessKnight } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { GiPistolGun } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { MdSportsFootball } from "react-icons/md";
// import { GameContext } from "../context/GameContext";
// import { useContext } from "react";
// import { getLast30Days } from "../utilities/apiQueries";

const Aside = () => {
  // const { setGames, GAMES_URL } = useContext(GameContext);

  // const getData = async () => {
  //   const APIKEY = "a08052b0ccda4e9f949c07103f97ca68";
  //   let apiUrl = `${GAMES_URL}?key=${APIKEY}&dates=${getLast30Days()}`;
  //   try {
  //     const response = await fetch(apiUrl);

  //     if (response.status >= 400) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     console.log(apiUrl);
  //     // console.log(getLast30Days());
  //     console.log(data);
  //     // setData(data);
  //   } catch (error) {
  //     console.log(error);
  //     //   setError(error);
  //   }
  // };

  return (
    <AsideContainer>
      <div>
        <span>New Releases</span>
        <div>
          <div>
            <FaStar />
          </div>
          Last 30 days
        </div>
        <div>
          <div>
            <FaHotjar />
          </div>
          This week
        </div>
        <div>
          <div>
            <FaFastForward />
          </div>
          Next week
        </div>
      </div>
      <div>
        <span>Top</span>
        <div>
          <div>
            <FaTrophy />
          </div>
          Best of the year
        </div>
        <div>
          <div>
            <IoIosPodium />
          </div>
          Popular in 2023
        </div>
        <div>
          <div>
            <FaCrown />
          </div>
          All time best
        </div>
      </div>
      <div>
        <span>Platforms</span>
        <div>
          <div>
            <FaWindows />
          </div>
          PC
        </div>
        <div>
          <div>
            <FaPlaystation />
          </div>
          Playstation
        </div>
        <div>
          <div>
            <FaXbox />
          </div>
          Xbox One
        </div>
        <div>
          <div>
            <BsNintendoSwitch />
          </div>
          Nintendo Switch
        </div>
        <div>
          <div>
            <FaApple />
          </div>
          Apple
        </div>
        <div>
          <div>
            <IoLogoAndroid />
          </div>
          Android
        </div>
      </div>
      <div>
        <span>Genres</span>
        <div>
          <div>
            <RiBoxingFill />
          </div>
          Action
        </div>
        <div>
          <div>
            <FaChessKnight />
          </div>
          Strategy
        </div>
        <div>
          <div>
            <RiSwordFill />
          </div>
          RPG
        </div>
        <div>
          <div>
            <GiPistolGun />
          </div>
          Shooter
        </div>
        <div>
          <div>
            <GiMountainRoad />
          </div>
          Adventure
        </div>
        <div>
          <div>
            <FaPuzzlePiece />
          </div>
          Puzzle
        </div>
        <div>
          <div>
            <FaFlagCheckered />
          </div>
          Racing
        </div>
        <div>
          <div>
            <MdSportsFootball />
          </div>
          Sport
        </div>
      </div>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  font-weight: 700;

  & > div {
    margin-bottom: 2rem;
  }

  & > div div {
    display: flex;
    gap: 0.6rem;
    margin: 0.3rem 0;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;

    &:hover div {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.gunmetal};
    }

    & div {
      border-radius: 0.5rem;
      font-size: 2.5rem;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.gunmetal};
    }
  }
`;

export default Aside;
