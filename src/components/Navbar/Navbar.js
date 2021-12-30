import React from "react";
import { useHistory } from "react-router-dom";
import { StyledNavbar } from "./Navbar.styled";

import { Home } from "@styled-icons/fluentui-system-regular/Home";

const Navbar = ({ transparent, setIsNavbarTransparent, activeTab, setActiveTab }) => {
  const history = useHistory();

  if (activeTab !== 'home') {
    setIsNavbarTransparent(false)
  }

  // handle redirects
  const handleGoToLink = name => {
    if (name.length === 0) {
      setActiveTab('home')
    } else {
      setActiveTab(name)
    }
    history.push(`/${name}`);
  };

  return (
    <StyledNavbar id="navbar" transparent={transparent}>
      <Home size={36} id="homeIcon" onClick={() => handleGoToLink("")} />
      <div className="links">
        <button onClick={() => handleGoToLink("food")}>Cafe</button>
        <button onClick={() => handleGoToLink("store")}>Shop</button>
        <button onClick={() => handleGoToLink("checkout")}>Cart</button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
