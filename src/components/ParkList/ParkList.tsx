import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { IPark, IParkList } from "../../redux/types/parkInterfaces";
import Park from "../Park/Park";
import { ParkListStyles } from "./ParkListStyles";

const ParkList = ({ results: parks }: IParkList) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadParksThunk());
  }, [dispatch]);

  return (
    <ParkListStyles>
      <div className="parkslist-container">
        {parks.map((park: IPark) => {
          return (
            <div className="park-container" key={park.id}>
              <Park {...park} />
            </div>
          );
        })}
      </div>
    </ParkListStyles>
  );
};

export default ParkList;
