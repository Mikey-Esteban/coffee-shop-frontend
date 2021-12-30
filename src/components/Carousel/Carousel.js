import React, { useState, useRef, useEffect } from "react";
import { MessageUs, Contact, Message } from "../../components";
import styled from "styled-components";

import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";
import { Clock } from "@styled-icons/feather/Clock";

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  margin: 20px auto;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: relative;

  display: flex;
  justify-content: flex-start;
`;

const MessageUsWrapper = styled.div`
  z-index: 10;
`;

const HoursWrapper = styled.div`
  display: flex;
  width: 100%;

  .times {
    width: 100%;
  }
`;

const Slider = styled.div`
  height: 100%;
  width: 300%;

  display: flex;
  flex-shrink: 0;

  transition: all 1s;

  section {
    position: relative;
    width: 33%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 33%;
    flex-shrink: 0;
    flex: 1;

    img {
      width: 100%;
    }

    p {
      width: 80%;
      color: black;
      font-size: 12px;
      letter-spacing: 0.05em;
      z-index: 10;
    }
  }

  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
  }
`;

const Controls = styled.div`
  .arrow {
    position: absolute;
    top: 45%;

    cursor: pointer;
  }

  .arrow.prev {
    left: 0;
  }
  .arrow.next {
    right: 0;
  }
`;

const ContactWrapper = styled.div`
  z-index: 10;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Carousel = ({ cafePhotos }) => {
  // first 3 photos of array
  let cafeArray = cafePhotos.slice(0, 3);

  // useRefs
  const sliderRef = useRef(null);
  const carouselRef = useRef(null);
  const section1Ref = useRef(null);

  // useState for active message button
  const [isMessageActive, setIsActiveMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    // add event listening for clicks
    const section1 = section1Ref.current;
    section1.addEventListener("click", e => {
      // check if active message box
      e.target.tagName.toLowerCase() === "textarea"
        ? setIsActiveMessage(true)
        : setIsActiveMessage(false);
    });

    const slider = sliderRef.current;
    const carousel = carouselRef.current;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let direction;

    // translate to the left
    prev.addEventListener("click", () => {
      // if direction is changing
      direction === "right" && slider.appendChild(slider.firstElementChild);

      carousel.style.justifyContent = "flex-end";
      slider.style.transform = `translateX(${100.0 / 3}%)`;
    });

    // translate to the right
    next.addEventListener("click", () => {
      // if direction is changing
      direction === "left" && slider.prepend(slider.lastElementChild);

      carousel.style.justifyContent = "flex-start";
      slider.style.transform = `translateX(-${100.0 / 3}%)`;
    });

    slider.addEventListener("transitionend", () => {
      console.log("SLIDER RUNNING");
      carousel.style.justifyContent === "flex-start"
        ? (direction = "right")
        : (direction = "left");

      // find if left or right move
      direction === "right"
        ? // move 0th element to the end
          slider.appendChild(slider.firstElementChild)
        : // move last element to the beginning
          slider.prepend(slider.lastElementChild);

      // shift the translate back to 0
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";

      setTimeout(() => {
        slider.style.transition = "all 1s";
      }, 10);
    });
  }, []);

  const section0Style = {
    background: `url(${cafeArray[0].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const section1Style = {
    background: `url(${cafeArray[1].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column"
  };

  const section2Style = {
    background: `url(${cafeArray[2].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <Wrapper>
      {showMessage && <Message message={message} />}
      <CarouselWrapper ref={carouselRef}>
        <Slider ref={sliderRef}>
          <section style={section0Style}>
            <p>
              At High Grounds Cafe we believe everyday should include a slice of
              relaxation. Whether if it's a quick stop on your way to work,
              spending the whole day on our beauitful living space or outdoor
              patio, or ending the day with a coffee or tea, let us make your
              day!
            </p>
          </section>
          <section style={section1Style} ref={section1Ref}>
            <ContactWrapper>
              <HoursWrapper>
                <Clock size={24} />:
                <div className="times">
                  <p>Saturday & Sunday 8-4</p>
                  <p> Monday to Friday 7-7</p>
                </div>
              </HoursWrapper>
              <Contact />
            </ContactWrapper>
          </section>
          <section style={section2Style}>
            <MessageUsWrapper>
              <MessageUs
                setShowMessage={setShowMessage}
                setMessage={setMessage}
              />
            </MessageUsWrapper>
          </section>
        </Slider>
        <Controls>
          <span className="arrow prev">
            <LeftArrow size={24} />
          </span>
          <span className="arrow next">
            <RightArrow size={24} />
          </span>
        </Controls>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default Carousel;
