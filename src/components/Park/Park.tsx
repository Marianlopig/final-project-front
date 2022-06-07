import { ParkStyles } from "./ParkStyles";
import { ImHeart } from "react-icons/im";
import { BsInfo } from "react-icons/bs";
import { GiKidSlide } from "react-icons/gi";
import { GiWateringCan } from "react-icons/gi";
import { BsTreeFill } from "react-icons/bs";
import { GiWoodenFence } from "react-icons/gi";
import { BiBeer } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { GiParkBench } from "react-icons/gi";
import { GiTable } from "react-icons/gi";
import { RiPingPongFill } from "react-icons/ri";
import { GiBasketballBasket } from "react-icons/gi";
import { RiBikeLine } from "react-icons/ri";
import { IPark, ParkDetail } from "../../redux/types/parkInterfaces";

const Park = ({ name, description, photos, details, address }: IPark) => {
  const getIcon = (detail: ParkDetail) => {
    let component;
    switch (detail) {
      case ParkDetail.Swing:
        component = <GiKidSlide />;
        break;
      case ParkDetail.Water:
        component = <GiWateringCan />;
        break;
      case ParkDetail.Shadow:
        component = <BsTreeFill />;
        break;
      case ParkDetail.Fence:
        component = <GiWoodenFence />;
        break;
      case ParkDetail.Bar:
        component = <BiBeer />;
        break;
      case ParkDetail.SwimmingPool:
        component = <MdPool />;
        break;
      case ParkDetail.Bench:
        component = <GiParkBench />;
        break;
      case ParkDetail.Picnic:
        component = <GiTable />;
        break;
      case ParkDetail.PingPong:
        component = <RiPingPongFill />;
        break;
      case ParkDetail.Basket:
        component = <GiBasketballBasket />;
        break;
      case ParkDetail.Bike:
        component = <RiBikeLine />;
        break;
    }

    return component;
  };

  return (
    <ParkStyles>
      <section>
        <div className="card">
          <img className="card-image" src={photos[0]} alt="beautiful forest" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <span>
              {address?.city}, {address?.address}
            </span>
            <h4>Details: </h4>

            <div className="details-container">
              {details.map((detail) => {
                return (
                  <div className="details-container--icons">
                    {getIcon(detail)}
                  </div>
                );
              })}
            </div>
            <p className="card-content">{description}</p>
          </div>

          <div className="button-container">
            <button className="button button--info">
              <BsInfo />
            </button>
            <button className="button button--favourite">
              <ImHeart />
            </button>
          </div>
        </div>
      </section>
    </ParkStyles>
  );
};

export default Park;
