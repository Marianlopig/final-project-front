import { SpinnerStyles } from "./SpinnerStyles";

export interface ISpinner {
  show: boolean;
}

const Spinner = ({ show }: ISpinner) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <SpinnerStyles>
      <div className={showHideClassName}>
        <div className="modal-main">
          <div data-testid="spinner" className="metronome">
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
            <div className="metronome__dot"></div>
          </div>
        </div>
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
