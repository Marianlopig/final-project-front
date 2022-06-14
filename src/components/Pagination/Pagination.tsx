import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { parkPageSelector } from "../../redux/features/parksSlice/parksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { PaginationStyles } from "./PaginationStyles";

const Pagination = () => {
  const parkState = useAppSelector(parkPageSelector);
  const dispatch = useAppDispatch();

  return (
    <PaginationStyles>
      <div className="pager">
        <div
          className="icon-container"
          onClick={() =>
            dispatch(loadParksThunk(undefined, parkState.previous))
          }
        >
          <BsCaretLeftFill title="previous-page" />
        </div>
        <span>21-30</span>

        <div
          className="icon-container"
          onClick={() => dispatch(loadParksThunk(undefined, parkState.next))}
        >
          <BsCaretRightFill title="next-page" />
        </div>
      </div>
    </PaginationStyles>
  );
};

export default Pagination;
