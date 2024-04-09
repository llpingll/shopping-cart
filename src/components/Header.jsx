import { FaRegChessKnight } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "../components/context/GameContext";

const Header = () => {
  const { setActiveCart, cart } = useContext(GameContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <FaRegChessKnight />
          Games Knight
        </Logo>
      </Link>
      <Navbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/store">Store</NavbarLink>
        <NavbarLink onClick={() => setActiveCart(true)}>
          {cart.length > 0 && <ItemIndicator>{cart.length}</ItemIndicator>}
          <RiShoppingCartLine />
        </NavbarLink>
      </Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  gap: 6rem;
`;

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.dark};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
  }
`;

const ItemIndicator = styled.div`
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
  font-size: 1.6rem;
  text-align: center;
  align-content: center;
  font-weight: 700;
`;

export default Header;
