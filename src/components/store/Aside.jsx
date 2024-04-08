import styled from "styled-components";
import { gameOptions } from "../utilities/apiCallOptions";
import { GameContext } from "../context/GameContext";
import { useContext, useState } from "react";

const Aside = () => {
  const { setOption, setOptionHeading } = useContext(GameContext);
  const [activeOption, setActiveOption] = useState("All time best");

  return (
    <AsideContainer>
      {gameOptions.map((option) => (
        <div key={option.cat}>
          <span>{option.cat}</span>
          {option.items.map((item) => (
            <div
              className={item.text === activeOption ? "active" : ""}
              key={item.text}
              onClick={() => {
                setOption(item.query);
                setOptionHeading(item.text);
                setActiveOption(item.text);
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
