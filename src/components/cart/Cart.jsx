import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

export const Cart = () => {
  const { activeCart, setActiveCart, cart, setCart, removeCartItem } =
    useContext(GameContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price);
    });
    return total.toFixed(2); // Format total to two decimal places
  };

  // Disable scrolling
  if (activeCart) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {activeCart && (
        <CartWrapper onClick={() => setActiveCart(false)}>
          <CartContainer onClick={(e) => e.stopPropagation()}>
            <Header>
              <p>{cart.length} Games</p>{" "}
              <button onClick={() => setCart([])}>Clear</button>
            </Header>
            {cart &&
              cart.map((item) => (
                <Card key={item.name}>
                  <div>
                    <div
                      onClick={() => {
                        removeCartItem(item.name);
                      }}
                    >
                      x
                    </div>
                  </div>
                  <Gamelink to={`/store/${item.id}`}>
                    <img src={item.background_image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{`$${item.price}`}</p>
                    </div>
                  </Gamelink>
                </Card>
              ))}
            <p>Total: {`$${calculateTotal()}`}</p>
          </CartContainer>
        </CartWrapper>
      )}
    </>
  );
};

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100%;
  max-width: 55rem;
  margin-left: auto;
  padding: 3.5rem;
  font-size: 2rem;

  & > p {
    color: grey;
    margin-top: 2.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

  & button {
    background: none;
    color: grey;
    cursor: pointer;
  }
`;

const Card = styled.div`
  margin-top: 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  padding: 2rem;
  border-radius: 2rem;

  & > div div {
    background-color: black;
    color: grey;
    width: 3rem;
    height: 3rem;
    text-align: center;
    align-content: center;
    padding-bottom: 0.5rem;
    margin-left: auto;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Gamelink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-align: right;
  align-items: center;
  color: grey;

  & img {
    width: 50%;
    border-radius: 2rem;
  }

  & div p:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;
