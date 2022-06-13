import { IPark } from "../../redux/types/parkInterfaces";
import CarouselPark from "../CarouselPark/CarouselPark";
import Map from "../Map/Map";

interface Props {
  park: IPark;
}

const DetailPark = ({ park }: Props) => {
  const {
    // id,
    // name,
    // description,
    // photos,
    photosBackup,
    location,
    // details,
    // owner,
    // address,
  } = park;

  return (
    <>
      <CarouselPark photosBackup={photosBackup} />;
      {location.coordinates && (
        <Map
          location={[location.coordinates[0], location.coordinates[1]]}
        ></Map>
      )}
    </>
  );
};

export default DetailPark;
