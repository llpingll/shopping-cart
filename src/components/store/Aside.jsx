import styled from "styled-components";
import { gameOptions } from "../utilities/apiCallOptions";
import { GameContext } from "../context/GameContext";
import { useContext, useEffect } from "react";

const Aside = () => {
  const {
    setOption,
    activeOption,
    setActiveOption,
    activeHamburger,
    setActiveHamburger,
  } = useContext(GameContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && activeHamburger) {
        setActiveHamburger(false);
      }
    };

    const handleScrollLock = () => {
      if (activeHamburger) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    handleScrollLock(); // Set initial scroll lock

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [activeHamburger, setActiveHamburger]);

  return (
    <AsideContainer className={activeHamburger ? "active" : ""}>
      {gameOptions.map((option) => (
        <div key={option.cat}>
          <span>{option.cat}</span>
          {option.items.map((item) => (
            <div
              className={item.text === activeOption ? "active" : ""}
              key={item.text}
              onClick={() => {
                setOption(item.query);
                setActiveOption(item.text);
                setActiveHamburger(false);
              }}
            >
              <div>{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
      ))}
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 800px) {
    display: none;
    position: fixed;
    padding: 3rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark};
    gap: 5rem;
    flex-wrap: wrap;
    overflow: auto;
    scrollbar-width: none;
  }

  &.active {
    @media (max-width: 800px) {
      display: flex;
      justify-content: space-between;
    }
  }

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

    &.active div {
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
