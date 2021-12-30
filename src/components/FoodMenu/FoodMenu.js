import React from "react";
import {
  StyleFoodMenu,
  HeaderWrapper,
  ItemWrapper,
  DescriptionWrapper,
  PriceWrapper,
  AltWrapper
} from "./FoodMenu.styled";

const FoodMenu = props => {
  return (
    <StyleFoodMenu>
      <img src={props.menuPhoto.url} alt={props.menuPhoto.title} />
      <HeaderWrapper>
        <h1>COFFEE & ESPRESSO</h1>
        <p>Check the board for today's coffee selection. All available iced.</p>
      </HeaderWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Coffee / Decaf</h3>
          <p>Locally-roasted organic beans.</p>
        </DescriptionWrapper>
        <PriceWrapper>1.95 | 2.25 | 2.40</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Caf&eacute; Au Lait</h3>
          <p>Coffee of the day with steamed milk.</p>
        </DescriptionWrapper>
        <PriceWrapper>2.25 | 2.40 | 2.95</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Espresso</h3>
          <p>Served alone or over a dollop of whipped cream.</p>
        </DescriptionWrapper>
        <PriceWrapper>1.95 | 2.95</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Macchiato</h3>
          <p>Espresso with a dollop of milk.</p>
        </DescriptionWrapper>
        <PriceWrapper>2.40| 3.05 | 3.40</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Latte</h3>
          <p>Espresso with steamed milk.</p>
        </DescriptionWrapper>
        <PriceWrapper>2.40 | 3.05 | 3.40</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Breve</h3>
          <p>Espresso with steamed half and half.</p>
        </DescriptionWrapper>
        <PriceWrapper>2.40 | 3.05 | 3.40</PriceWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <DescriptionWrapper>
          <h3>Mocha</h3>
          <p>Espresso, premium chocolate syrup and steamed milk.</p>
        </DescriptionWrapper>
        <PriceWrapper>2.50 | 3.10 | 3.50</PriceWrapper>
      </ItemWrapper>
      <AltWrapper>
        <p>Alt Milk +.50: Soy, Almond, Oat</p>
      </AltWrapper>
    </StyleFoodMenu>
  );
};

export default FoodMenu;
