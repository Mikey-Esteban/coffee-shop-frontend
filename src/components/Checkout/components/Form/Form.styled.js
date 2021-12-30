import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    width: 50%;
    margin: 0 auto;
  }

  h3 {
    margin: 20px;
  }

  .field {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 10px 0;
  }

  .showingErrorMessage {
    padding-bottom: 8px;
  }

  input {
    border: none;
    border-bottom: 1px solid #efefef;
  }

  input:focus {
    outline: none;
  }

  label {
    order: -1;
    opacity: 0;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  /* select */
  #cardTypeLabel {
    opacity: 0.7;
    font-size: 13px;
  }

  select {
    width: 150px;
    opacity: 0.8;
  }

  .activeField {
    label,
    input {
      color: #457b9d; /* blue */
    }

    input {
      border-bottom: 1px solid #457b9d; /* blue */
    }
  }

  .thin {
    display: flex;
    justify-content: space-between;
  }

  #cardType {
    margin-top: 1rem;
  }

  #expirationDate {
    width: 40%;
  }
  #cvv {
    width: 40%;
  }

  .slidein {
    animation-duration: 700ms;
    animation-name: slidein;
    opacity: 0.6;
    font-size: 13px;

    @keyframes slidein {
      0% {
        opacity: 0;
        top: 24px;
        left: 5px;
      }
      100% {
        opacity: 0.6;
        top: 2px;
        left: 2px;
      }
    }
  }

  input:focus + label {
    visibility: visible;
  }

  input:focus::placeholder {
    color: transparent;
  }

  input[type="submit"] {
    width: 100%;

    background: #e07a5f; /* red */
    border: 1px solid #e07a5f; /* red */
    color: white;
    cursor: pointer;
    padding: 10px 0;
    transition: all ease-in-out 150ms;
  }

  input[type="submit"]:hover {
    background: white;
    border: 1px solid #e07a5f; /* red */
    color: #e07a5f; /* red */
  }

  .errorMessage {
    font-size: 10px;
    color: #e63946; /* red */
  }

  @media only screen and (max-width: 850px) {
    form {
      width: 75%;
    }
  }

  @media only screen and (max-width: 510px) {
    form {
      width: 90%;
    }
  }
`;
