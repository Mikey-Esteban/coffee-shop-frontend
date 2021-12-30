import React, { Fragment } from "react";
import styled from "styled-components";

import { Welcome, AboutUs, Carousel, MailingList, Map } from "../components";

const WelcomeWrapper = styled.div`
  min-height: 100vh;
  z-index: -1;
  display: flex;
  align-items: center;
`;

const AboutUsWrapper = styled.div`
  position: relative;
`;

const Home = ({ mainPhoto, cafePhotos, isMobile }) => {
  let style = {
    backgroundImage: `url(${mainPhoto.url})`,
    backgroundSize: "cover"
  };

  ////////////////
  // MOBILE RENDERING
  //////

  // render about us
  const renderAboutUs = () => {
    if (!isMobile) {
      return <AboutUs cafePhotos={cafePhotos} />;
    } else {
      return <Carousel cafePhotos={cafePhotos} />;
    }
  };

  return (
    <Fragment>
      <WelcomeWrapper style={style}>
        <Welcome />
      </WelcomeWrapper>
      <AboutUsWrapper>{renderAboutUs()}</AboutUsWrapper>
      <MailingList />
      {isMobile && <Map isMobile={isMobile} />}
    </Fragment>
  );
};

export default Home;
