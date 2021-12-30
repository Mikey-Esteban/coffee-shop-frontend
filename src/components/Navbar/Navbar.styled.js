import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 10;

  background-color: ${props => (props.transparent ? "none" : "white")};

  #homeIcon {
    cursor: pointer;
    opacity: 0.5;
    transition: all ease-in-out 200ms;
    margin-left: 10px;
  }

  #homeIcon:hover {
    opacity: 1;
  }

  .links {
    width: 200px;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: black;
      opacity: 0.5;
      transition: all ease-in-out 200ms;
    }

    a:hover {
      opacity: 1;
    }

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.primaryDark};
      cursor: pointer;
      font-size: 16px;
      opacity: 0.5;
      transition: all ease-in-out 200ms;
    }

    button:hover {
      opacity: 1;
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
