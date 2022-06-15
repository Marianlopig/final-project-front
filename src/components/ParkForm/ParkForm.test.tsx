import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPark } from "../../mocks/ParksMocks";
import store from "../../redux/store/store";
import ParkForm from "./ParkForm";

const mockDispatch = jest.fn();
jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

describe("Given a ParkForm component", () => {
  describe("When it is instanted", () => {
    test("Then it should render a form with four steps", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkForm edit={false} />
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

  describe("When it is instanted in edit mode", () => {
    test("Then it should render a form with four steps and the park", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkForm park={mockPark} edit={true} />
          </Provider>
        </BrowserRouter>
      );

      const selectParkStep = screen.getByText("Edit park Location");
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

      const uploadPicStep = screen.getByText(
        "Change your pictures or add new ones"
      );
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

      const parkDetails = screen.getByText("Change details from the park");
      expect(parkDetails).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const parkName = screen.getByText("Edit your park details");
      expect(parkName).toBeInTheDocument();

      const submitButton = screen.getByRole("button", { name: "Edit" });
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

  describe("When detail is selected", () => {
    test("Then it saves the detail in the array of details", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkForm edit={false} />
          </Provider>
        </BrowserRouter>
      );

      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const checkboxes = screen.getAllByRole("checkbox") as [HTMLInputElement];
      const checkbox = checkboxes[0];

      fireEvent(
        checkbox,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(checkbox.checked).toEqual(true);

      fireEvent(
        checkbox,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(checkbox.checked).toEqual(false);
    });
  });

  describe("When the form is submited", () => {
    test("Then it dispatches the creatParkThunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ParkForm edit={false} />
          </Provider>
        </BrowserRouter>
      );

      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeInTheDocument();

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      fireEvent(
        nextButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      const submitButton = screen.getByRole("button", { name: "Create" });
      expect(submitButton).toBeInTheDocument();

      fireEvent(
        submitButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(mockDispatch).toHaveBeenCalledWith(expect.anything());
    });
  });
});
