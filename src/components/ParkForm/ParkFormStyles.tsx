import styled from "styled-components";

export const ParkFormStyles = styled.div`
  font-family: "roboto";

  form {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    form {
      width: 100%;
    }
  }
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
      margin-right: 10px;
    }
  }
`;
