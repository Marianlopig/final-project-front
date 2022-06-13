import { IPark } from "../../redux/types/parkInterfaces";
import CarouselPark from "../CarouselPark/CarouselPark";
import DetailsIcons from "../DetailsIcons/DetailsIcons";
import Map from "../Map/Map";

interface Props {
  park: IPark;
}

const DetailPark = ({ park }: Props) => {
  const {
    // id,
    name,
    description,
    // photos,
    photosBackup,
    location,
    details,
    // owner,
    address,
  } = park;

  console.log(details);

  return (
    <>
      <CarouselPark photosBackup={photosBackup} />
      <h1>{name}</h1>
      <p>{description}</p>
      <DetailsIcons details={details} />

      <p>
        {address?.city}, {address?.address}
      </p>
      {location.coordinates && location.coordinates[0] && (
        <Map
          location={[location.coordinates[0], location.coordinates[1]]}
        ></Map>
      )}
    </>
  );
};

export default DetailPark;
