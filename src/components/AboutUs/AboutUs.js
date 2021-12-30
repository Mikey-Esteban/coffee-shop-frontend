import React, { useState } from "react";
import styled from "styled-components";
import { Map, Contact, MessageUs, Message } from "../../components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  &:last-of-type {
    margin-bottom: 80px;
  }
  display: flex;
  justify-content: space-around;

  color: #343a40; /* dark gray */

  .text {
    width: 50%;
  }

  img {
    max-width: 50%;
    max-height: 450px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  letter-spacing: 0.05em;
  line-height: 1.7em;
  word-spacing: 0.1em;

  div {
    width: 80%;
    margin: 0 auto;
  }

  #aboutUs {
    font-size: 1rem;
  }

  div.hoursAndMessage {
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    font-size: 13px;

    .hours {
      display: flex;
      flex-direction: column;
      justify-content: center;

      line-height: 1.5rem;
      letter-spacing: 0.08rem;
    }
  }

  div.location {
    display: flex;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.05em;
  line-height: 1.7em;
  word-spacing: 0.1em;
`;

const MessageUsWrapper = styled.div`
  textarea {
    border: 1px solid black;
  }
`;

const AboutUs = ({ cafePhotos }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();
  return (
    <Wrapper>
      <InfoWrapper>
        <TextWrapper>
          <div className="info" id="aboutUs">
            At High Grounds Cafe we believe everyday should include a slice of
            relaxation. Whether if it's a quick stop on your way to work,
            spending the whole day on our beauitful living space or outdoor
            patio, or ending the day with a coffee or tea, let us make your day!
          </div>
        </TextWrapper>
        <img src={cafePhotos[0].url} alt={cafePhotos[0].title} />
      </InfoWrapper>
      <InfoWrapper>
        <img src={cafePhotos[1].url} alt={cafePhotos[1].title} />
        <TextWrapper className="text">
          <div className="hoursAndMessage">
            <div className="hours">
              <h3>Hours</h3>
              <p>Saturday & Sunday 8-4</p>
              <p>Monday to Friday 7-7</p>
            </div>
            {showMessage && <Message message={message} />}
            <MessageUsWrapper>
              <MessageUs
                setShowMessage={setShowMessage}
                setMessage={setMessage}
              />
            </MessageUsWrapper>
          </div>
        </TextWrapper>
      </InfoWrapper>
      <InfoWrapper>
        <AddressWrapper className="text">
          <Contact />
          <Map />
        </AddressWrapper>
        <img src={cafePhotos[2].url} alt={cafePhotos[2].title} />
      </InfoWrapper>
    </Wrapper>
  );
};

export default AboutUs;
