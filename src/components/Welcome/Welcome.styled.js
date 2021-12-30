import styled from "styled-components";

export const StyledWelcome = styled.div`
  color: white;
  margin-left: 15%;
  margin-top: -10%;
  line-height: 3em;

  @media only screen and (max-width: 500px) {
    margin-left: 5%;
  }

  h1 {
    font-size: 60px;
    font-weight: 300;
    opacity: 0;
    text-shadow: 5px 6px 9px rgb(100, 100, 100);
  }

  #tag {
    margin: 10px 0 50px 0;
    text-shadow: 2px 2px 4px rgb(100, 100, 100);
    transform: translateX(-100%);
  }

  .slide-in {
    animation: slide-in 1s forwards;
    -webkit-animation: slide-in 1s forwards;
  }

  button {
    border: 2px solid white;
    border-radius: 3px;
    padding: 10px 20px;

    background: transparent;
    color: white;
    cursor: pointer;

    transition: all ease-in-out 100ms;
  }

  button:hover {
    background: white;
    color: #936639; /* brown */
  }

  @keyframes slide-in {
    50% {
      transform: translateX(1%);
    }
    80% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
