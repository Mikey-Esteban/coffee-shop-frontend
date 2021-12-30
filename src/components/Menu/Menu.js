import React from "react";
import { useHistory } from "react-router-dom";
import { StyledMenu } from "./Menu.styled";

import { Home } from '@styled-icons/fluentui-system-regular/Home'
import { DrinkCoffee } from "@styled-icons/fluentui-system-regular/DrinkCoffee";
import { Store2 } from "@styled-icons/remix-line/Store2";
import { Cart } from '@styled-icons/fluentui-system-regular/Cart'

const Menu = ({ open, setOpen }) => {
  const history = useHistory();

  // handle redirects
  const handleGoToLink = name => {
    setOpen(!open)
    history.push(`/${name}`);
  };

  return (
    <StyledMenu open={open}>
      <p onClick={() => handleGoToLink('')}>
        <span role="img" aria-label="home">
          <Home size={40} />
        </span>
        Home
      </p>
      <p onClick={() => handleGoToLink('food')}>
        <span role="img" aria-label="menu">
          <DrinkCoffee size={40} />
        </span>
        Menu
      </p>
      <p onClick={() => handleGoToLink('store')}>
        <span role="img" aria-label="store">
          <Store2 size={40} />
        </span>
        Store
      </p>
      <p onClick={() => handleGoToLink('checkout')}>
        <span role="img" aria-label="contact">
          <Cart size={40} />
        </span>
        Cart
      </p>
    </StyledMenu>
  );
};
export default Menu;
