import styled from "styled-components";

export const FiltersStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: initial;
  z-index: 3;

  .main-container {
    background-color: #c9e265;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 3;

    .button-container {
      display: flex;
      padding: 10px 20px 10px 0px;
      justify-content: center;
      align-items: center;
      gap: 20px;
      button {
        display: flex;
        border: none;
        height: 40px;
        border-radius: 12%;
        justify-content: center;
        align-items: center;
        border: none;
        color: white;
        font-size: 15px;
        font-weight: bold;
        white-space: nowrap;
        background-color: #00c2cb;
      }
    }
    .input-container {
      color: #545656;
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;
      label {
        display: none;
      }
      input {
        height: 40px;
        font-size: 20px;
        background-color: #a1f4f9;
        border-radius: 12px;
        border: 1;
        border-color: #b5b7b7;
        box-sizing: border-box;
        color: #545656;
        font-size: 15px;
        padding-left: 20px;
        :focus {
          outline: none;
        }
        ::placeholder {
          color: #9d9c9c;
        }
      }
      button {
        display: flex;
        border: none;
        height: 40px;
        border-radius: 12%;
        justify-content: center;
        align-items: center;
        border: none;
        color: white;
        font-size: 15px;
        font-weight: bold;
        background-color: #00c2cb;
      }
    }
  }
  .container-filter {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #a7a8a8;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 5;
    svg {
      color: white;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 15px;

    .main-container {
      display: none;
    }

    .container-filter {
      display: flex;
      margin-top: -15px;
    }

    .main-container.expanded {
      display: block;
      .input-container {
        padding-bottom: 20px;
      }
      .button-container {
        gap: 10px;
        button {
          height: 45px;
        }
      }
    }
  }
`;
