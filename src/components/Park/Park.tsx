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

const Park = () => {
  return (
    <ParkStyles>
      <section>
        <div className="card">
          <img
            className="card-image"
            src="https://www.tododisca.com/wp-content/uploads/2020/02/parque-infantil-adaptado-barcelona.jpg"
            alt="beautiful forest"
          />
          <div className="card-body">
            <h3 className="card-title">Hello World</h3>
            <span>Barcelona, paseo de Gracia</span>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4>Details: </h4>
            <div className="details-container">
              <div className="details-container--icons">
                <GiKidSlide />
              </div>
              <div className="details-container--icons">
                <GiWateringCan />
              </div>
              <div className="details-container--icons">
                <BsTreeFill />
              </div>
              <div className="details-container--icons">
                <GiWoodenFence />
              </div>
              <div className="details-container--icons">
                <BiBeer />
              </div>
              <div className="details-container--icons">
                <MdPool />
              </div>
              <div className="details-container--icons">
                <GiParkBench />
              </div>
              <div className="details-container--icons">
                <GiTable />
              </div>
              <div className="details-container--icons">
                <RiPingPongFill />
              </div>
              <div className="details-container--icons">
                <GiBasketballBasket />
              </div>
              <div className="details-container--icons">
                <RiBikeLine />
              </div>
            </div>
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
