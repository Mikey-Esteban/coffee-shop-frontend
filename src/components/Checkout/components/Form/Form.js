import React, { useState } from "react";
import { StyledForm } from "./Form.styled";

import { checkCreditCard } from "./creditCard.js";

const Form = () => {
  // useState for form
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: "",
    phone: "",
    cardNumber: "",
    cardType: "",
    cvv: "",
    zipCode: ""
  });

  // useState for error messages
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [addressError, setAddressError] = useState();
  const [stateError, setStateError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [cardNumberError, setCardNumberError] = useState();
  const [expirationDateError, setExpirationDateError] = useState();
  const [cvvError, setCvvError] = useState();
  const [zipCodeError, setZipCodeError] = useState();

  // event handler for input change
  const handleInputChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // event handler for input click
  const handleInputClick = event => {
    // grab field node
    const fieldNode = event.target.parentNode;
    fieldNode.classList.add("activeField");
    // add listener event for input checker
    document.addEventListener("click", e => {
      let isClickInsideElement = event.target.contains(e.target);
      if (!isClickInsideElement) {
        // run input validate
        checkInputValidation(event.target);
        fieldNode.classList.remove("activeField");
      }
    });
  };

  // check input validation
  const checkInputValidation = input => {
    // grab field
    let field = input.parentNode;
    console.log(field);

    const data = {
      firstName: {
        resultFunc: validateNotEmpty,
        errorMessage: setFirstNameError,
        name: "first name"
      },
      lastName: {
        resultFunc: validateNotEmpty,
        errorMessage: setLastNameError,
        name: "last name"
      },
      email: {
        resultFunc: validateEmail,
        errorMessage: setEmailError,
        name: "email"
      },
      address: {
        resultFunc: validateNotEmpty,
        errorMessage: setAddressError,
        name: "address"
      },
      state: {
        resultFunc: validateNotEmpty,
        errorMessage: setStateError,
        name: "state"
      },
      phone: {
        resultFunc: validatePhone,
        errorMessage: setPhoneError,
        name: "phone"
      },
      cardNumber: {
        resultFunc: validateCreditCard,
        errorMessage: setCardNumberError,
        name: "card"
      },
      expirationDate: {
        resultFunc: validateNotEmpty,
        errorMessage: setExpirationDateError,
        name: "expiration date"
      },
      cvv: {
        resultFunc: validateNotEmpty,
        errorMessage: setCvvError,
        name: "cvv"
      },
      zipCode: {
        resultFunc: validateNotEmpty,
        errorMessage: setZipCodeError,
        name: "zip code"
      }
    };

    // grab correct function
    let funcs = data[input.name];

    let func = funcs["resultFunc"];
    let errorMessage = funcs["errorMessage"];
    let name = funcs["name"];

    // handle special case for credit card
    if (input.name === "cardNumber") {
      // grab card type
      const cardType = document.getElementById("cardType");
      const cardTypeValue = cardType.options[cardType.selectedIndex].value;
      let result = validateCreditCard(input.value, cardTypeValue);
      if (result[0] === false) {
        field.classList.add("showingErrorMessage");
        setCardNumberError(result[1]);
      } else {
        field.classList.remove("showingErrorMessage");
        setCardNumberError("");
      }
      return;
    }

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

  // remove slidein
  const removeSlidein = node => {
    node.classList.remove("slidein");
  };

  // add slidein
  const addSlidein = node => {
    const label = node.nextSibling;
    label.classList.add("slidein");
  };

  // event handler to check if slider should run
  const checkSlider = e => {
    // return if submit button is pressed
    if (e.target.classList.contains("submit")) {
      return;
    }
    // grab all labels
    const labels = document.querySelectorAll("label");
    labels.forEach(label => {
      const input = label.previousSibling;
      // check if input is blank
      input.value === "" && removeSlidein(label);
    });

    e.target.nodeName === "INPUT" && addSlidein(e.target);
  };

  // event handler for form submit
  const handleSubmit = e => {
    e.preventDefault();
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

  // credit card validation
  const validateCreditCard = (cardNumber, cardType) => {
    let result = checkCreditCard(cardNumber, cardType);
    return result;
  };

  return (
    <StyledForm onClick={checkSlider}>
      <form action="" onSubmit={handleSubmit}>
        <div className="personalInfo">
          <h3>Personal info</h3>
          <div className="field">
            <input
              type="text"
              placeholder="First Name*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="firstName"
              value={userInfo.firstName || ""}
            />
            <label htmlFor="">First Name*</label>
            <p className="errorMessage">{firstNameError}</p>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Last Name*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="lastName"
              value={userInfo.lastName || ""}
            />
            <label htmlFor="">Last Name*</label>
            <p className="errorMessage">{lastNameError}</p>
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="email"
              value={userInfo.email || ""}
            />
            <label htmlFor="">Email*</label>
            <p className="errorMessage">{emailError}</p>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Address*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="address"
              value={userInfo.address || ""}
            />
            <label htmlFor="">Address*</label>
            <p className="errorMessage">{addressError}</p>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="State*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="state"
              value={userInfo.state || ""}
            />
            <label htmlFor="">State*</label>
            <p className="errorMessage">{stateError}</p>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Phone*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="phone"
              value={userInfo.phone || ""}
            />
            <label htmlFor="">Phone*</label>
            <p className="errorMessage">{phoneError}</p>
          </div>
        </div>
        <div className="payment">
          <h3>Payment</h3>
          <div className="field custom-select">
            <select
              id="cardType"
              name="cardType"
              onChange={handleInputChange}
              value={userInfo.cardType || ""}
            >
              <option value defaultValue>
                -- select an option --
              </option>
              <option value="amEx">American Express</option>
              <option value="discover">Discover</option>
              <option value="masterCard">Mastercard</option>
              <option value="visa">Visa</option>
            </select>
            <label id="cardTypeLabel" htmlFor="cardType">
              Card type*
            </label>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Card Number*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="cardNumber"
              value={userInfo.cardNumber || ""}
            />
            <label htmlFor="">Card Number*</label>
            <p className="errorMessage">{cardNumberError}</p>
          </div>
          <div className="thin">
            <div className="field" id="expirationDate">
              <input
                type="text"
                placeholder="Expiration Date*"
                onChange={handleInputChange}
                onClick={handleInputClick}
                name="expirationDate"
                value={userInfo.expirationDate || ""}
              />
              <label htmlFor="">Expiration Date*</label>
              <p className="errorMessage">{expirationDateError}</p>
            </div>
            <div className="field" id="cvv">
              <input
                type="text"
                placeholder="CVV*"
                onChange={handleInputChange}
                onClick={handleInputClick}
                name="cvv"
                value={userInfo.cvv || ""}
              />
              <label htmlFor="">CVV*</label>
              <p className="errorMessage">{cvvError}</p>
            </div>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Zip Code*"
              onChange={handleInputChange}
              onClick={handleInputClick}
              name="zipCode"
              value={userInfo.zipCode || ""}
            />
            <label htmlFor="">Zip Code*</label>
            <p className="errorMessage">{zipCodeError}</p>
          </div>
        </div>
        <input type="submit" className="submit" />
      </form>
    </StyledForm>
  );
};

export default Form;
