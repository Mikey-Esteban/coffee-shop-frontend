import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 101;
  padding: 10px 20px;

  position: fixed;
  top: 100px;
  right: -1000px;

  background-color: #e07a5f; /* red */
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;

  animation-duration: 5s;
  animation-name: slidein;

  @keyframes slidein {
    0% {
      right: -300px;
    }

    4% {
      right: 43px;
    }
    10%,
    90% {
      right: 37px;
    }

    100% {
      right: -1000px;
    }
  }
`;

const Message = ({ message }) => {
  return <Wrapper>{message}</Wrapper>;
};

export default Message;
