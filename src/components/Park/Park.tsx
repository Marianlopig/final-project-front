import { ParkStyles } from "./ParkStyles";
import { ImHeart } from "react-icons/im";
import { BsInfo } from "react-icons/bs";

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
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4>Details: </h4>
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
