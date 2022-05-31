import styled from "styled-components";

export const LoginFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  .container {
    background-color: #92b5b1;
    padding: 20px;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    h2 {
      color: #2c2d2d;
      text-align: center;
      font-size: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60px;
        padding-bottom: 10px;
        font-size: 20px;
        color: #474949;
        input {
          ::placeholder {
            color: #d8d5db;
          }
          width: 100%;
          align-items: center;
          justify-content: center;
          background-color: #777f7c;
          border-radius: 12px;
          border: 0;
          box-sizing: border-box;
          color: white;
          font-size: 18px;
          height: 100%;
        }
      }
      .submitContainer {
        display: flex;
        width: 100%;
        justify-content: center;
        button {
          background-color: #ec4940;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 50%;
          opacity: 0.9;
          display: flex;
          justify-content: center;
          font-size: 20px;
          border-radius: 15px;
          align-items: center;
        }
      }
    }
  }
`;
