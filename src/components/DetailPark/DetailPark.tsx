import { IPark } from "../../redux/types/parkInterfaces";
import CarouselPark from "../CarouselPark/CarouselPark";

interface Props {
  park: IPark;
}

const DetailPark = ({ park }: Props) => {
  const {
    id,
    name,
    description,
    photos,
    photosBackup,
    location,
    details,
    owner,
    address,
  } = park;
  return <CarouselPark photosBackup={photosBackup} />;
};

export default DetailPark;
