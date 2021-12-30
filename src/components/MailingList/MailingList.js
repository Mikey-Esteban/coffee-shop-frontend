import React, { useState } from "react";
import styled from "styled-components";

import { Message } from "../../components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f2; /* ccd5ae */
  height: 300px;
  margin-bottom: 20px;

  h5 {
    font-size: 12px;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  .showingErrorMessage > p {
    margin-top: -16px;
    margin-bottom: -11px;
    color: #e07a5f; /* red */
  }

  input {
    width: 200px;
    border: 1px solid #efefef;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 200px;

    background: transparent;
    border: 1px solid #a1a1a1; /* gray */
    border-radius: 2px;
    padding: 5px 0;
    cursor: pointer;

    transition: all ease-in-out 200ms;
  }

  button:hover {
    background: white;
    border: 1px solid white;
    color: #a1a1a1; /* gray */
  }

  p {
    font-size: 10px;
  }
`;

const MailingList = () => {
  // useState for email
  const [email, setEmail] = useState();
  // useState for message sent notification
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();
  // useState for error messages
  const [emailError, setEmailError] = useState();

  // event handler for input change
  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  // email validation
  const validateEmail = email => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // event handler for input click
  const handleInputClick = event => {
    // add listener event for input checker
    document.addEventListener("click", e => {
      let isClickInsideElement = event.target.contains(e.target);
      let submitButton = document.querySelector("#button");
      console.log(submitButton);
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
    console.log(field);

    const data = {
      email: {
        resultFunc: validateEmail,
        errorMessage: setEmailError,
        name: "email"
      }
    };

    // grab correct function
    let funcs = data[input.name];

    let func = funcs["resultFunc"];
    let errorMessage = funcs["errorMessage"];
    let name = funcs["name"];

    // grab result
    let result = func(input.value);

    if (!result) {
      field.classList.add("showingErrorMessage");
      // handle empty case
      if (input.value === "") return errorMessage(`No ${name} provided`);
      errorMessage(`Invalid ${name}`);
    } else {
      field.classList.remove("showingErrorMessage");
      errorMessage("");
    }

    return;
  };

  // handle show subscribed message
  const handleSubscribed = () => {
    let flag = validateEmail(email);
    if (flag) {
      setShowMessage(!showMessage);
      setMessage("Thank you for subscribing! Please enjoy our deals :)");
      setTimeout(resetMessage, 5000);
    }
  };

  // clear show subscribed message
  const resetMessage = () => {
    setShowMessage(!showMessage);
    setMessage(null);
  };

  return (
    <Wrapper>
      {showMessage && <Message message={message} />}
      <h3>Join our mailing list.</h3> <h5>Be in the know =).</h5>
      <p>Get deals and offers you can only find from this mailing list.</p>
      <div className="field">
        <input
          type="email"
          onChange={handleInputChange}
          onClick={handleInputClick}
          name="email"
          id="email"
          value={email || ""}
          placeholder="Enter email address"
        />
        <p className="errorMessage">{emailError}</p>
      </div>
      <button onClick={handleSubscribed} id="button">
        Sign up
      </button>
      <h5>We respect your privacy.</h5>
    </Wrapper>
  );
};

export default MailingList;
