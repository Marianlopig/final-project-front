import styled from "styled-components";

export const NotFoundPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  h2 {
    color: #0cc8d0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 20px;
  }
  span {
    color: #0cc8d0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    font-weight: bold;
  }
  img {
    display: flex;
    width: 100%;
    max-width: 900px;
  }

  button {
    background-color: #c9e265;
    color: white;
    padding: 14px 20px;
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
`;
