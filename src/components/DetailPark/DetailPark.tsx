import { IPark } from "../../redux/types/parkInterfaces";
import CarouselPark from "../CarouselPark/CarouselPark";

const DetailPark = (park: IPark) => {
  return <CarouselPark park={park} />;
};

export default DetailPark;
