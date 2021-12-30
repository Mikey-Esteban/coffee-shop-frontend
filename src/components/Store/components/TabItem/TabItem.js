import React, { useState } from "react";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Form } from "./components";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 500px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-items: center;
  border: 1px solid #efefef;
  border-radius: 2px;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 3fr 2fr 1fr;
    width: 300px;
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  * {
    align-self: center;
    justify-self: center;
  }

  .imageBox {
    height: 75px;
    width: 75px;
  }

  .price {
    margin-left: 10px;
  }

  button {
    padding: 10px 20px;

    background-color: #a5a58d; /* soft green */
    background-color: ${({ theme }) => theme.primaryLight};
    border: 1px solid ${({ theme }) => theme.primaryLight}; /* soft green */
    color: white;
    cursor: pointer;
    transition: all ease-in-out 100ms;
  }

  button:hover {
    background-color: white;
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.secondaryDark};
  cursor: pointer;
`;

const TabItem = ({ data, handleAddItemToCart }) => {
  const style = {
    backgroundImage: `url(${data.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  // useState for forms
  const [viewForm, setViewForm] = useState(false);

  // handle show form
  const handleViewForm = e => {
    setViewForm(!viewForm);
  };

  return (
    <Wrapper>
      <div className="title">
        {data.title}
        {data.price && <span className="price">${data.price}</span>}
      </div>
      <div className="imageBox" style={style}></div>
      {data.prices.length > 0 && (
        <IconWrapper>
          <Plus size={24} onClick={handleViewForm} />
        </IconWrapper>
      )}
      {data.price && (
        <button onClick={handleAddItemToCart(data)}>add to cart</button>
      )}

      {viewForm && (
        <Form
          item={data}
          setViewForm={setViewForm}
          viewForm={viewForm}
          handleAddItemToCart={handleAddItemToCart}
        />
      )}
    </Wrapper>
  );
};

export default TabItem;
