import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 300px;

  textarea {
    border-radius: 2px;
    opacity: 0.6;
    padding: 10px;
  }

  textarea:focus {
    outline: none;
    opacity: 1;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
  }

  .showingErrorMessage > p {
    font-size: .6rem;
    color: #e07a5f; /* red */
  }

  .errorMessage {
    height: 16px;
  }

  input {
    width: 300px;
    border: none;
    background: #efefef;
    line-height: 1.5rem;
  }

  input[type="text"] {
    padding-left: 10px;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background: #e07a5f; /* red */
  border: 1px solid #e07a5f; /* red */
  color: white;
  cursor: pointer;
  padding: 5px 0;
  transition: all ease-in-out 150ms;

  &:hover {
    background: none;
    color: #e07a5f; /* red */
  }
`;

const MessageUs = ({ setShowMessage, setMessage }) => {

  // useState for user message
  const [ userMessage, setUserMessage ] = useState()
  // useState for user contact info
  const [ contactInfo, setContactInfo ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  // event handler for input change
  const handleInputChange = e => {
    setContactInfo(e.target.value);
  };

  // email validation
  const validateEmail = email => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // phone validation
  const validatePhone = phone => {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  };

  // empty validate
  const validateNotEmpty = str => {
    return str.length !== 0;
  };

  // event handler for input click
  const handleInputClick = event => {
    // add listener event for input checker
    document.addEventListener("click", e => {
      let isClickInsideElement = event.target.contains(e.target);
      console.log('WHAT IS CLICK INSIDE ELEMENT', isClickInsideElement);
      let submitButton = document.querySelector("#messageButton");
      if (!isClickInsideElement) {
        // run input validate
        checkInputValidation(event.target);
      }
    });
  };

  // check input validation
  const checkInputValidation = input => {
    // grab field
    let field = input.parentNode;

    // grab result
    let emptyResult = validateNotEmpty(input.value)
    let phoneResult = validatePhone(input.value)
    let emailResult = validateEmail(input.value);

    // handle if phone or email is true
    if (phoneResult || emailResult) {
      field.classList.remove('showingErrorMessage')
      return setErrorMessage('')
    }
    // handle empty case
    field.classList.add("showingErrorMessage");
    if (!emptyResult) {
      return setErrorMessage('Please fill in email or phone :)')
    }
    return setErrorMessage('Please enter a valid phone or email ;)')
  };

  // handle message sent
  const handleMessageSent = () => {
    let emptyFlag = validateNotEmpty(contactInfo)
    let phoneFlag = validatePhone(contactInfo)
    let emailFlag = validateEmail(contactInfo)

    // if not empty and a valid phone / email
    if (emptyFlag && (phoneFlag || emailFlag)) {
      setShowMessage(true);
      setMessage(
        "We've received your message! We will get back to you shortly :)"
      );
      setTimeout(resetMessage, 5000);
      handleClearTextarea();
    }
  };

  // handle clear textarea
  const handleClearTextarea = () => {
    let textarea = document.querySelector("#message");
    textarea.value = "";
  };

  // reset message
  const resetMessage = () => {
    setShowMessage(false);
    setMessage(null);
  };

  return (
    <Wrapper>
      Any questions? Leave us a message!
      <textarea name="message" id="message" cols="40" rows="5"></textarea>
      <div className="field">
        <input
          type="text"
          name="contactInfo"
          onChange={handleInputChange}
          onClick={handleInputClick}
          id="contactInfo"
          value={contactInfo || ''}
          placeholder="enter your email or number so we can reply back!"
        />
        <p className="errorMessage">{errorMessage}</p>
      </div>
      <StyledButton onClick={handleMessageSent} id="messageButton">send</StyledButton>
    </Wrapper>
  );
};

export default MessageUs;
