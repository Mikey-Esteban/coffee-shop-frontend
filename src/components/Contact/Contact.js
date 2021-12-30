import React from "react";
import { Location } from "@styled-icons/evil/Location";
import { Phone } from "@styled-icons/feather/Phone";
import { Instagram } from "@styled-icons/feather/Instagram";

import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 13px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <p>
        <Instagram size={20} />: h1ghgroundscafe
      </p>
      <p>
        <Phone size={20} />: 555-555-5555
      </p>
      <p>
        <Location size={28} />: 5-46 46th Ave, Long Island City, NY 11101
      </p>
    </Wrapper>
  );
};

export default Contact;
