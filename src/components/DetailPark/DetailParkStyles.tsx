import styled from "styled-components";

export const DetailParkStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 900px;
    background-color: #ffffff;
    margin: 24px;
    padding: 16px;
    min-width: 288px;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    transition: 0.4s;
    h1 {
      color: #0cc8d0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;
    }
    button {
      background-color: #c9e265;
      color: white;
      padding: 10px 10px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      width: 150px;
      opacity: 0.9;
      display: flex;
      justify-content: center;
      font-size: 20px;
      border-radius: 15px;
      align-items: center;
      :disabled {
        opacity: 0.4;
      }
    }
    .body-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
    }
    p {
      font-size: 15px;
      padding-left: 20px;
    }
    .description {
      font-size: 20px;
    }
  }
`;
