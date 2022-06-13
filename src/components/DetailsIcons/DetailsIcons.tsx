import { ParkDetail } from "../../redux/types/parkInterfaces";
import { BsTreeFill } from "react-icons/bs";
import {
  GiKidSlide,
  GiBasketballBasket,
  GiWateringCan,
  GiWoodenFence,
  GiParkBench,
  GiTable,
} from "react-icons/gi";
import { BiBeer } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { RiPingPongFill, RiBikeLine } from "react-icons/ri";
import { DetailsIconsStyles } from "./DetailsIconsStyles";

interface DetailsProps {
  details: string[];
}

const DetailsIcons = ({ details }: DetailsProps) => {
  const getIcon = (detail: string) => {
    let component;
    switch (detail) {
      case ParkDetail.swing:
        component = <GiKidSlide />;
        break;
      case ParkDetail.water:
        component = <GiWateringCan />;
        break;
      case ParkDetail.shadow:
        component = <BsTreeFill />;
        break;
      case ParkDetail.fence:
        component = <GiWoodenFence />;
        break;
      case ParkDetail.bar:
        component = <BiBeer />;
        break;
      case ParkDetail.swimmingPool:
        component = <MdPool />;
        break;
      case ParkDetail.bench:
        component = <GiParkBench />;
        break;
      case ParkDetail.picnic:
        component = <GiTable />;
        break;
      case ParkDetail.pingPong:
        component = <RiPingPongFill />;
        break;
      case ParkDetail.basket:
        component = <GiBasketballBasket />;
        break;
      case ParkDetail.bike:
        component = <RiBikeLine />;
        break;
    }

    return component;
  };

  return (
    <DetailsIconsStyles>
      <div className="details-container">
        {details.map((detail) => {
          return (
            <div className="details-container--icons">{getIcon(detail)}</div>
          );
        })}
      </div>
    </DetailsIconsStyles>
  );
};

export default DetailsIcons;
