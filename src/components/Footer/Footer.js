import React from "react";
import { StyledFooter } from "./Footer.styled";

import { Mail } from "@styled-icons/feather/Mail";
import { Facebook } from "@styled-icons/feather/Facebook";
import { Instagram } from "@styled-icons/feather/Instagram";
import { Twitter } from "@styled-icons/feather/Twitter";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="socials">
        <Mail size={16} />
        <Facebook size={16} />
        <Instagram size={16} />
        <Twitter size={16} />
      </div>
      <div className="info">
        <p>5-46 46th Ave (retail)</p>
        <p>Long Island City, NY 11101</p>
        <p>(555)-555-5555</p>
        <p>emailaddress@gmail.com</p>
      </div>
      <div className="cc">&#169; Mikey Esteban 2021</div>
    </StyledFooter>
  );
};

export default Footer;
