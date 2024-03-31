import { FaPlaystation, FaApple, FaXbox, FaWindows } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { IoIosPodium } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { RiBoxingFill } from "react-icons/ri";
import { FaChessKnight } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { GiPistolGun } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { MdSportsFootball } from "react-icons/md";

const getDates = (days, calculate) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const dateX = today;
  if (calculate === "+") {
    dateX.setDate(today.getDate() - days);
  } else {
    dateX.setDate(today.getDate() + days);
  }
  const yearX = dateX.getFullYear();
  const monthX = String(dateX.getMonth() + 1).padStart(2, "0");
  const dayX = String(dateX.getDate()).padStart(2, "0");

  if (calculate === "+")
    return `${yearX}-${monthX}-${dayX},${year}-${month}-${day}`;
  return `${year}-${month}-${day},${yearX}-${monthX}-${dayX}`;
};

const getPreviousYear = () => {
  const today = new Date();
  const lastYear = today.getFullYear() - 1;

  return `${lastYear}-01-01,${lastYear}-12-31`;
};

export const gameOptions = [
  {
    cat: "New Releases",
    items: [
      {
        icon: <FaStar />,
        text: "Last 30 days",
        query: `&dates=${getDates(30, "+")}`,
      },
      {
        icon: <FaHotjar />,
        text: "This week",
        query: `&dates=${getDates(7, "+")}`,
      },
      {
        icon: <FaFastForward />,
        text: "Next week",
        query: `&dates=${getDates(7, "-")}`,
      },
    ],
  },
  {
    cat: "Top",
    items: [
      {
        icon: <FaTrophy />,
        text: "Best of the year",
        query: `&dates=${getDates(365, "+")}`,
      },
      {
        icon: <IoIosPodium />,
        text: "Popular in 2023",
        query: `&dates=${getPreviousYear()}`,
      },
      {
        icon: <FaCrown />,
        text: "All time best",
        query: ``,
      },
    ],
  },
  {
    cat: "Platforms",
    items: [
      {
        icon: <FaWindows />,
        text: "PC",
        query: `&platforms=4`,
      },
      {
        icon: <FaPlaystation />,
        text: "Playstation",
        query: `&platforms=187`,
      },
      {
        icon: <FaXbox />,
        text: "Xbox One",
        query: `&platforms=1`,
      },
      {
        icon: <BsNintendoSwitch />,
        text: "Nintendo Switch",
        query: `&platforms=7`,
      },
      {
        icon: <FaApple />,
        text: "Apple",
        query: `&platforms=5`,
      },
      {
        icon: <IoLogoAndroid />,
        text: "Android",
        query: `&platforms=21`,
      },
    ],
  },
  {
    cat: "Genres",
    items: [
      {
        icon: <RiBoxingFill />,
        text: "Action",
        query: `&genres=action`,
      },
      {
        icon: <FaChessKnight />,
        text: "Strategy",
        query: `&genres=strategy`,
      },
      {
        icon: <RiSwordFill />,
        text: "RPG",
        query: `&genres=role-playing-games-rpg`,
      },
      {
        icon: <GiPistolGun />,
        text: "Shooter",
        query: `&genres=shooter`,
      },
      {
        icon: <GiMountainRoad />,
        text: "Adventure",
        query: `&genres=adventure`,
      },
      {
        icon: <FaPuzzlePiece />,
        text: "Puzzle",
        query: `&genres=puzzle`,
      },
      {
        icon: <FaFlagCheckered />,
        text: "Racing",
        query: `&genres=racing`,
      },
      {
        icon: <MdSportsFootball />,
        text: "Sport",
        query: `&genres=sports`,
      },
    ],
  },
];
