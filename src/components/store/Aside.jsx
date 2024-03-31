import styled from "styled-components";
import { gameOptions } from "../utilities/apiCallOptions";
import { GameContext } from "../context/GameContext";
import { useContext } from "react";
// import { getLast30Days } from "../utilities/apiQueries";

const Aside = () => {
  const { setOption } = useContext(GameContext);

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
      {gameOptions.map((option) => (
        <div key={option.cat}>
          <span>{option.cat}</span>
          {option.items.map((item) => (
            <div key={item.text} onClick={() => setOption(item.query)}>
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

    & div {
      border-radius: 0.5rem;
      font-size: 2.5rem;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.gunmetal};
    }
  }
`;

export default Aside;
