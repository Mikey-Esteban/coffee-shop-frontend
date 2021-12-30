import React from "react";
import styled from "styled-components";

import { Form } from "./components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  padding-top: 80px;

  .item {
    margin: 0 auto;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    font-size: 12px;
  }

  .item:nth-child(even) {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }

  .nameAndCount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .priceAndImg {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .itemName {
    margin-left: 10px;
  }

  .itemUrl > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    transition: all ease-in-out 100ms;
  }

  .itemUrl > img:hover {
    transform: scale(2);
  }

  #listWrapper {
    width: 300px;
    margin: 0 auto;
  }

  #totalCost {
    border-top: 2px solid black;

    display: flex;
    justify-content: space-between;
  }
`;

const Checkout = ({ cart }) => {
  console.log(cart);

  // initialize cart data
  const data = {};
  // initialize list
  let itemsList = [];
  // initialize total cost
  let totalCost = 0;

  // add count, price, url to items
  cart.forEach(item => {
    if (data[item.title]) {
      data[item.title].count += 1;
      data[item.title].price += item.price;
      data[item.title].url = item.url;
      totalCost += item.price;
    } else {
      data[item.title] = { count: 1, price: item.price, url: item.url };
      totalCost += item.price;
    }
  });

  console.log(data);

  // render list of items
  const renderList = () => {
    for (const prop in data) {
      const row = (
        <div key={prop} className="item">
          <div className="nameAndCount">
            <span className="itemName">{prop}</span>
            <span className="itemCount">x{data[prop].count}</span>
          </div>

          <div className="priceAndImg">
            <span className="itemPrice" id="price">
              ${data[prop].price}
            </span>
            <span className="itemUrl">
              <img src={data[prop].url} alt={data[prop]} />
            </span>
          </div>
        </div>
      );
      itemsList.push(row);
    }
    return itemsList;
  };

  // render total cost
  const renderCost = () => {
    return (
      <div id="totalCost">
        <span>Total:</span> <span>${totalCost}</span>
      </div>
    );
  };

  return (
    <Wrapper>
      <div id="listWrapper">
        <h3>Your Order</h3>
        {renderList()}
        {renderCost()}
      </div>
      <Form />
    </Wrapper>
  );
};

export default Checkout;
