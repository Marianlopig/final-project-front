import { useNavigate } from "react-router-dom";
import { NotFoundPageStyles } from "./NotFoundPageStyles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageStyles>
      <h2>Ups, we couldn't find what you are looking for</h2>
      <span>Sorry for the inconveniences</span>

      <button onClick={() => navigate("/parks")}>Park List</button>
      <img src="images/parkerror.png" alt="columpia error" />
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
