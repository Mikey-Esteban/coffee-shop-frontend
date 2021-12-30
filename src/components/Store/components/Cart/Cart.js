import React from "react";
import { useHistory } from "react-router";
import { Wrapper, IconWrapper, CartIconWrapper } from "./Cart.styled";
import { Delete } from "@styled-icons/typicons/Delete";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { Plus } from "@styled-icons/boxicons-regular/Plus";

const Cart = ({
  cart,
  setCart,
  handleToggleShowCart,
  showCart,
  handleShowForm
}) => {
  // initialize usehistory
  let history = useHistory();
  // initialize cart data
  const data = {};
  // initialize list array
  let itemsList = [];

  // add count & price to items
  cart.forEach(item => {
    if (data[item.title]) {
      data[item.title].count += 1;
      data[item.title].price += item.price;
    } else {
      data[item.title] = { count: 1, price: item.price };
    }
  });

  // handle Plus icon
  const handlePlusClick = title => {
    const newItem = cart.filter(item => item.title === title)[0];
    setCart([...cart, newItem]);
  };

  // handle Minus icon
  const handleMinusClick = title => {
    let idx = cart.findIndex(item => item.title === title);
    const newCart = cart.filter((item, index) => index !== idx);
    setCart(newCart);
  };

  // handle go to checkout
  const handleGoToCheckout = () => {
    history.push("/checkout");
  };

  // create row for each item
  for (const prop in data) {
    const row = (
      <div key={prop} className="item">
        <span className="itemName">
          {prop}
          <span className="itemCount">x{data[prop].count}</span>
        </span>

        <span className="priceAndIcons">
          <span id="itemPrice">${data[prop].price}</span>
          <Plus
            className="additiveIcons"
            onClick={() => handlePlusClick(prop)}
            size={12}
          />
          <Minus
            className="additiveIcons"
            onClick={() => handleMinusClick(prop)}
            size={12}
          />
        </span>
      </div>
    );
    itemsList.push(row);
  }

  const renderCart = () => {
    if (itemsList.length === 0) {
      itemsList = "Cart is empty";
    }
    if (showCart) {
      return (
        <Wrapper>
          <div className="cartWrapper">
            <IconWrapper>
              <Delete size={24} onClick={handleToggleShowCart} />
            </IconWrapper>
            {itemsList}
            <button onClick={handleGoToCheckout}>Checkout</button>
          </div>
        </Wrapper>
      );
    } else {
      return (
        <CartIconWrapper>
          <ShoppingCart
            className="cartIcon"
            size={24}
            onClick={handleToggleShowCart}
          />
          <p>{cart.length}</p>
        </CartIconWrapper>
      );
    }
  };

  return renderCart();
};

export default Cart;
