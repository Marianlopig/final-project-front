import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { IPark, IParkList } from "../../redux/types/parkInterfaces";
import Park from "../Park/Park";

const ParkList = ({ results: parks }: IParkList) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadParksThunk());
  }, [dispatch]);

  return (
    <ul>
      {parks.map((park: IPark) => {
        return (
          <li key={park.id}>
            <Park />
          </li>
        );
      })}
    </ul>
  );
};

export default ParkList;
