import { IPark, IParkList } from "../../redux/types/parkInterfaces";
import Park from "../Park/Park";
import { ParkListStyles } from "./ParkListStyles";

const ParkList = ({ results: parks }: IParkList) => {
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
