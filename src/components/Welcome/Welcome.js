import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { StyledWelcome } from "./Welcome.styled";

const Welcome = () => {
  let history = useHistory();

  useEffect(() => {
    setTimeout(fade, 1000);
    setTimeout(shift, 1500);
  }, []);

  const fade = () => {
    let i = 0;
    let h1 = document.querySelector("#welcomeCTA");
    let k = window.setInterval(() => {
      if (i >= 10) {
        clearInterval(k);
      } else {
        h1.style.opacity = i / 10;
        i++;
      }
    }, 100);
  };

  const shift = () => {
    let p = document.querySelector("#tag");
    p.classList.add("slide-in");
  };

  return (
    <StyledWelcome>
      <h1 id="welcomeCTA">HIGH GROUNDS CAFE</h1>
      <p id="tag">experience love at first sip.</p>
      <button onClick={() => history.push("/store")}>Order Online</button>
    </StyledWelcome>
  );
};

export default Welcome;
