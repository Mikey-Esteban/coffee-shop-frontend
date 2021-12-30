import React, { useState, useEffect } from "react";
import { Delete } from "@styled-icons/typicons/Delete";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  min-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;

  background: rgba(0, 0, 0, 0.4);
  color: white;
`;

const StyledForm = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  fieldset {
    width: 80%;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;

    border-color: white;
  }

  #total {
    font-size: 20px;
  }

  button {
    position: absolute;
    bottom: 30px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;
`;

const Form = ({ item, viewForm, setViewForm, handleAddItemToCart }) => {
  console.log(item);

  const style = {
    backgroundImage: `url(${item.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  // useState for pricing
  const [size, setSize] = useState();
  const [temp, setTemp] = useState();
  const [milk, setMilk] = useState();

  // calculate total
  const calculateTotal = () => {
    let total = 0;
    if (size) {
      const price = {
        small: item.prices[0],
        medium: item.prices[1],
        large: item.prices[2]
      };
      total += Number(price[size]);
    }
    if (temp === "cold") {
      total += 0.5;
    }
    if (milk && milk !== "whole") {
      total += 0.75;
    }

    return total;
  };

  // add title and price to item
  const editItem = () => {
    let newItem = { ...item };
    let newTitle = `${newItem.title} ${size} ${temp} ${milk}`;
    newItem.title = newTitle;
    newItem.price = calculateTotal();

    return newItem;
  };

  // render button
  const renderButton = () => {
    if (size && temp && milk) {
      return (
        <button id="button" onClick={handleAddItemToCart(editItem())}>
          add to cart
        </button>
      );
    }
  };

  useEffect(() => {
    document.addEventListener("click", e => {
      if (e.target.id === "wrapper" || e.target.id === "button") {
        setViewForm(!viewForm);
      }
    });
  }, []);

  return (
    <Wrapper id="wrapper">
      <StyledForm style={style}>
        <IconWrapper>
          <Delete size={24} onClick={() => setViewForm(!viewForm)} />
        </IconWrapper>
        <fieldset>
          <legend>size</legend>

          <div>
            <input
              type="radio"
              id="small"
              name="size"
              onClick={() => {
                setSize("small");
              }}
            />
            <label htmlFor="small">small</label>
          </div>

          <div>
            <input
              type="radio"
              id="medium"
              name="size"
              onClick={() => {
                setSize("medium");
              }}
            />
            <label htmlFor="medium">medium</label>
          </div>

          <div>
            <input
              type="radio"
              id="large"
              name="size"
              onClick={() => {
                setSize("large");
              }}
            />
            <label htmlFor="large">large</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>temperature</legend>

          <div>
            <input
              type="radio"
              id="hot"
              name="temperature"
              onClick={() => {
                setTemp("hot");
              }}
            />
            <label htmlFor="hot">hot</label>
          </div>

          <div>
            <input
              type="radio"
              id="cold"
              name="temperature"
              onClick={() => {
                setTemp("cold");
              }}
            />
            <label htmlFor="cold">iced</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>milk</legend>

          <div>
            <div>
              <input
                type="radio"
                id="whole-milk"
                name="milk"
                onClick={() => {
                  setMilk("whole milk");
                }}
              />
              <label htmlFor="whole-milk">whole milk</label>
            </div>

            <div>
              <input
                type="radio"
                id="oat"
                name="milk"
                onClick={() => {
                  setMilk("oat");
                }}
              />
              <label htmlFor="oat">oat</label>
            </div>
          </div>

          <div>
            <div>
              <input
                type="radio"
                id="almond"
                name="milk"
                onClick={() => {
                  setMilk("almond");
                }}
              />
              <label htmlFor="almond">almond</label>
            </div>

            <div>
              <input
                type="radio"
                id="soy"
                name="milk"
                onClick={() => {
                  setMilk("soy");
                }}
              />
              <label htmlFor="soy">soy</label>
            </div>
          </div>
        </fieldset>

        <div id="total">Total: {calculateTotal()}</div>

        {renderButton()}
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
