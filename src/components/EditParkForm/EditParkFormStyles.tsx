import styled from "styled-components";

export const EditParkFormStyles = styled.div`
  font-family: "roboto";
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      form {
        width: 100%;
      }
    }
    h2 {
      color: #0cc8d0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    h3 {
      color: #545454;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      padding-top: 10px;
      gap: 10px;
    }
    button {
      border: none;
      padding: 14px 20px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      width: 50%;
      opacity: 0.9;
      display: flex;
      justify-content: center;
      font-size: 20px;
      border-radius: 15px;
      align-items: center;
      max-width: 200px;
    }
    .button-next {
      background-color: #c9e265;
      color: white;
      margin-left: auto;
      margin-right: 20px;
    }
    .button-previous {
      background-color: #c9e265;
      color: white;
      margin-left: auto;
      margin-left: 20px;
    }
    .button-create {
      background-color: #0cc8d0;
      color: white;
      margin-left: auto;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .container-steps--photos {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
      height: 600px;
      margin-top: -100px;

      [type="file"] {
        display: none;
      }
      .input-container {
        background-color: #b4b0b0;
        height: 300px;
        width: 300px;
        border-radius: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          position: absolute;
          height: 200px;
          width: 200px;
          opacity: 40%;
          z-index: 9999;
        }
        .selected-image {
          width: 100%;
        }
      }
    }
    .container-steps--icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;

      .container-icons {
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: column;
        gap: 10px;
        font-size: 24px;
        padding-bottom: 20px;
        label {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 45px;
          width: 90%;
          .items {
            display: flex;
            gap: 40px;
            svg {
              font-size: 30px;
            }
          }
          input {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: flex-end;
          }
        }
      }
    }

    .container-name {
      padding: 20px;
      border-radius: 12px;
      border: 0;
      box-sizing: border-box;

      label {
        display: none;
      }

      input {
        display: flex;
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #7b8a8a;
        background-color: #cfeef0;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: white;
        font-size: 18px;
        padding-left: 20px;
        margin-bottom: 20px;
        :focus {
          outline: none;
        }
        ::placeholder {
          color: #9d9c9c;
          font-weight: bolder;
        }
      }
    }
  }
`;
