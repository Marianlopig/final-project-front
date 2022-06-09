import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ParkForm from "./ParkForm";

describe("Given a ParkForm component", () => {
  describe("When it is instanted", () => {
    test("Then it should render a form with four steps", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkForm />
          </Provider>
        </BrowserRouter>
      );

      const selectParkStep = screen.getByText("Select park location");
      expect(selectParkStep).toBeInTheDocument();

      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const uploadPicStep = screen.getByText("Upload pictures");
      expect(uploadPicStep).toBeInTheDocument();

      const prevButton = screen.getByRole("button", { name: "Previous" });
      expect(prevButton).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const parkDetails = screen.getByText("What does this park have?");
      expect(parkDetails).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const parkName = screen.getByText("Let others find it!");
      expect(parkName).toBeInTheDocument();

      const submitButton = screen.getByRole("button", { name: "Create" });
      expect(submitButton).toBeInTheDocument();

      fireEvent(
        prevButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const parkNameNotFound = screen.queryByText("Let others find it!");

      expect(parkNameNotFound).toBe(null);
    });
  });
});
