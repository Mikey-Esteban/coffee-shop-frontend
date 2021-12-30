import styled from "styled-components";

export const StyledFooter = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #495057; /* dark gray */
  font-size: 11px;
  line-height: 1.4em;
  letter-spacing: 0.1em;

  /* SOCIALS */
  .socials {
    height: 50px;
    width: 80%;
    margin: 0 auto;
    border-top: 3px solid #495057; /* dark gray */
    border-bottom: 3px solid #495057; /* dark gray */

    display: flex;
    align-items: center;
    justify-content: flex-end;

    * {
      margin: 2px;
      color: #495057; /* dark gray */
      cursor: pointer;
      transition: all ease-in-out 100ms;
    }

    *:hover {
      color: black;
      transform: scale(1.1);
    }
  }

  /* INFO */
  .info {
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
  }

  .cc {
    margin: 0 auto;
    padding-bottom: 25px;
  }
`;
