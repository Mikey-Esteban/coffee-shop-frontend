import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardItem, TabItem, Cart } from "./components";
import { Message } from "../../components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 60px;
  margin: 0 auto;
  width: 80%;
`;

const CTAWrapper = styled.div`
  margin: 20px 0;
`;

// curated items are in Card format
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
  }

  @media only screen and (max-width: 510px) {
    grid-template-columns: 1fr;
    row-gap: 0px;
  }
`;

// takeout items are in tab format
const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;

  background: transparent;
  border: 1px solid #a5a58d; /* soft green */
  border-radius: 3px;
  color: #a5a58d; /* soft green */
  cursor: pointer;
  transition: all ease-in-out 100ms;

  &:hover {
    background: ${({ theme }) => theme.secondaryDark};
    color: white;
  }
`;

const Store = ({ items, storePhotos, cart, setCart, localStorage }) => {
  // useStates
  const [viewCurated, setViewCurated] = useState(true);
  const [viewTakeout, setViewTakeout] = useState(false);
  const [filteredCurated, setFilteredCurated] = useState();
  const [filteredTakeout, setFilteredTakeout] = useState();
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // add photos to items
  useEffect(() => {
    items.forEach(item => {
      const itemPhoto = storePhotos.filter(
        photo => photo.title === item.title
      )[0].url;
      item.url = itemPhoto;
    });

    // filter out curated and takeout items
    const filteredCurated = items.filter(item => item.id < 12);
    const filteredTakeout = items.filter(item => item.id >= 12);

    setFilteredCurated(filteredCurated);
    setFilteredTakeout(filteredTakeout);

    console.log("FDSAFADSFDSAFADSFASDFASFSFSFDSAFASDF");
    setIsLoaded(true);
  }, []);

  // toggle view
  const toggleView = () => {
    setViewCurated(!viewCurated);
    setViewTakeout(!viewTakeout);
  };

  // reset message
  const resetMessage = () => {
    setMessage(null);
    setShowMessage(false);
  };

  // sort cart
  const sortCart = cart => {
    return cart.sort((a, b) => (a.title > b.title ? 1 : -1));
  };

  // add items to cart
  const handleItemClick = item => event => {
    console.log("ITEM", item);
    // update useState
    setCart([...cart, item]);
    setMessage(`${item.title} was added to cart!`);
    setShowMessage(true);
    setTimeout(resetMessage, 5000);
    // update localStorage
    cart.push(item);
    // sort cart
    sortCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    let hiyo = JSON.parse(localStorage.getItem("cart"));
    console.log("LOCAL STORAGE", hiyo);
  };

  // toggle show cart
  const handleToggleShowCart = () => {
    setShowCart(!showCart);
  };

  // create items list of selected tab
  let itemsList;
  if (isLoaded) {
    if (viewCurated) {
      itemsList = filteredCurated.map((item, index) => (
        <CardItem key={index} data={item} handleItemClick={handleItemClick} />
      ));
    } else {
      itemsList = filteredTakeout.map((item, index) => (
        <TabItem
          key={index}
          data={item}
          handleAddItemToCart={handleItemClick}
        />
      ));
    }
  }

  return (
    <Wrapper>
      <CTAWrapper>
        {viewTakeout && (
          <StyledButton onClick={toggleView}>View Curated Items</StyledButton>
        )}
        {viewCurated && (
          <StyledButton onClick={toggleView}>View Takeout</StyledButton>
        )}
      </CTAWrapper>
      {viewCurated && <CardWrapper>{itemsList}</CardWrapper>}
      {viewTakeout && <TabWrapper>{itemsList}</TabWrapper>}

      {showMessage && <Message message={message} />}

      <Cart
        handleToggleShowCart={handleToggleShowCart}
        cart={cart}
        setCart={setCart}
        showCart={showCart}
      />
    </Wrapper>
  );
};

export default Store;
