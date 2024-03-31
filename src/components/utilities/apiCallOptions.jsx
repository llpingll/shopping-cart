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

const getLast30Days = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const thirtyDaysAgo = today;
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const year30 = thirtyDaysAgo.getFullYear();
  const month30 = String(thirtyDaysAgo.getMonth() + 1).padStart(2, "0");
  const day30 = String(thirtyDaysAgo.getDate()).padStart(2, "0");

  return `${year30}-${month30}-${day30},${year}-${month}-${day}`;
};

export const gameOptions = [
  {
    cat: "New Releases",
    items: [
      {
        icon: <FaStar />,
        text: "Last 30 days",
        query: `&dates=${getLast30Days()}`,
      },
      {
        icon: <FaHotjar />,
        text: "This week",
      },
      {
        icon: <FaFastForward />,
        text: "Next week",
      },
    ],
  },
  {
    cat: "Top",
    items: [
      {
        icon: <FaTrophy />,
        text: "Best of the year",
      },
      {
        icon: <IoIosPodium />,
        text: "Popular in 2023",
      },
      {
        icon: <FaCrown />,
        text: "All time best",
        query: "",
      },
    ],
  },
  {
    cat: "Platforms",
    items: [
      {
        icon: <FaWindows />,
        text: "PC",
      },
      {
        icon: <FaPlaystation />,
        text: "Playstation",
      },
      {
        icon: <FaXbox />,
        text: "Xbox One",
      },
      {
        icon: <BsNintendoSwitch />,
        text: "Nintendo Switch",
      },
      {
        icon: <FaApple />,
        text: "Apple",
      },
      {
        icon: <IoLogoAndroid />,
        text: "Android",
      },
    ],
  },
  {
    cat: "Genres",
    items: [
      {
        icon: <RiBoxingFill />,
        text: "Action",
      },
      {
        icon: <FaChessKnight />,
        text: "Strategy",
      },
      {
        icon: <RiSwordFill />,
        text: "RPG",
      },
      {
        icon: <GiPistolGun />,
        text: "Shooter",
      },
      {
        icon: <GiMountainRoad />,
        text: "Adventure",
      },
      {
        icon: <FaPuzzlePiece />,
        text: "Puzzle",
      },
      {
        icon: <FaFlagCheckered />,
        text: "Racing",
      },
      {
        icon: <MdSportsFootball />,
        text: "Sport",
      },
    ],
  },
];
