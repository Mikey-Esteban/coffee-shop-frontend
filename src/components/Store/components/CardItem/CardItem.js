import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  margin-bottom: 50px;

  transition: all ease-in-out 100ms;

  .imageBox {
    width: 200px;
    height: 200px;
  }

  .title,
  .price {
    font-size: 12px;
    line-height: 1.5em;
  }

  button {
    width: 100%;
    padding: 10px 0;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #a5a58d; /* soft green */
    background-color: ${({ theme }) => theme.primaryLight};
    transition: all ease-in-out 100ms;
  }

  button: hover {
    color: #a5a58d;
    color: ${({ theme }) => theme.secondaryDark};
    background-color: white;
  }

  &:hover {
    box-shadow: 5px 10px 15px #d1cdc0;
    transform: scale(1.01);
  }

  @media only screen and (max-width: 510px) {
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;

const CardItem = ({ data, handleItemClick }) => {
  const style = {
    backgroundImage: `url(${data.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <Wrapper>
      <div className="title">{data.title}</div>
      <div className="price">${data.price}</div>
      <div className="imageBox" style={style}></div>
      <button onClick={handleItemClick(data)}>add to cart</button>
    </Wrapper>
  );
};

export default CardItem;
