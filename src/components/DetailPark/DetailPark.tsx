import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import { IPark } from "../../redux/types/parkInterfaces";
import CarouselPark from "../CarouselPark/CarouselPark";
import DetailsIcons from "../DetailsIcons/DetailsIcons";
import Map from "../Map/Map";
import { DetailParkStyles } from "./DetailParkStyles";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";

interface Props {
  park: IPark;
}

const DetailPark = ({ park }: Props) => {
  const {
    id,
    name,
    description,
    // photos,
    photosBackup,
    location,
    details,
    // owner,
    address,
  } = park;

  const navigate = useNavigate();
  const { loggedIn } = useAppSelector(accountSelector);

  return (
    <DetailParkStyles>
      <div className="main-container">
        <h1>{name}</h1>
        <CarouselPark photosBackup={photosBackup} />
        <p className="description">{description}</p>
        <div className="body-container">
          <DetailsIcons details={details} />
          {loggedIn && (
            <button
              onClick={() => {
                navigate(`/park/${id}/edit`);
              }}
            >
              Edit
            </button>
          )}
        </div>
        <p>
          {address?.city}, {address?.address}
        </p>

        {location.coordinates && location.coordinates[0] && (
          <Map
            location={[location.coordinates[0], location.coordinates[1]]}
          ></Map>
        )}
      </div>
    </DetailParkStyles>
  );
};

export default DetailPark;
