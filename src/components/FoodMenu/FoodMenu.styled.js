import styled from "styled-components";

const StyleFoodMenu = styled.div`
  min-height: 100vh;
  width: 480px;
  margin: 0 auto;
  padding-top: 80px;

  img {
    position: absolute;
    top: 40px;
    z-index: -1;
    opacity: 0.2;
    min-height: 100vh;
    width: 500px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: .9rem;
    font-weight: 600;
  }

  h3 {
    font-size: .8rem;
    line-height: 1.3rem;
    font-weight: 500;
  }

  p {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

const AltWrapper = styled.div`
  margin-top: 20px;
`;

const ItemWrapper = styled.div`
  width: 80%;
  margin: 10px;
  max-width: 600px;
`;

const DescriptionWrapper = styled.div`
  float: left;
`;

const PriceWrapper = styled.div`
  float: right;
  font-size: 0.7rem;
  font-weight: 500;
`;

export {
  StyleFoodMenu,
  HeaderWrapper,
  AltWrapper,
  ItemWrapper,
  DescriptionWrapper,
  PriceWrapper
};
