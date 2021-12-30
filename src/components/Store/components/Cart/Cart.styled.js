import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 50vh;
  width: 350px;
  position: fixed;
  bottom: 0;
  right: 0;
  overflow-y: scroll;

  background-color: white;
  border: ${({ theme }) => `2px solid ${theme.primaryLight}` };
  padding: 20px;

  font-size: 12px;

  .cartWrapper {
    position: relative;

    div:nth-child(even) {
      background-color: #efefef;
    }

    div {
      display: flex;
      align-items: center;
      height: 30px;

      padding-left: 10px;
    }
  }

  .item {
    display: flex;
    justify-content: space-between;

    .itemCount {
      margin-left: 10px;
    }
    .priceAndIcons {
      margin-right: 5px;
    }

    #itemPrice {
      margin-right: 5px;
    }

    .additiveIcons {
      color: #3d405b; /* purple */
      margin-left: 5px;
    }
  }

  button {
    width: 100%;

    border: none;
    padding: 10px 0;

    background-color: #e07a5f; /* red */
    color: white;
    cursor: pointer;

    transition: background-color ease-in-out 100ms;
    transition: color ease-in-out 100ms;
  }

  button:hover {
    padding: 9px 0;

    background-color: white;
    border: 1px solid #e07a5f; /* red */
    color: #e07a5f;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -20px;
  right: -10px;

  color: #e07a5f; /* red */
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;

  cursor: pointer;

  p {
    position: absolute;
    top: -10px;
    right: 0;

    color: #e07a5f; /* red */
    font-size: 8px;
  }
`;

export { Wrapper, IconWrapper, CartIconWrapper };
