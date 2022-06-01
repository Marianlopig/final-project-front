import { Metronome } from "@uiball/loaders";
import { SpinnerStyles } from "./SpinnerStyles";

interface ISpinner {
  show: boolean;
}

const Spinner = ({ show }: ISpinner) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <SpinnerStyles>
      <div className={showHideClassName}>
        <div className="modal-main">
          <Metronome size={100} speed={1.6} color="#FFDE59" />
        </div>
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
