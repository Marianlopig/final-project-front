import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexStyles = styled.div`
  * {
    font-family: "roboto";
    overflow-x: hidden;
  }
  html,
  body {
    margin: 0px;
    padding: 0px;
    max-width: 100%;
    overflow-x: hidden;
    font-family: "roboto";
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IndexStyles>
          <ToastContainer autoClose={3000} />
          <App />
        </IndexStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
