import { ParkStyles } from "./ParkStyles";
import { ImHeart } from "react-icons/im";
import { BsInfo } from "react-icons/bs";
import { IPark } from "../../redux/types/parkInterfaces";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";
import {
  addFavouriteThunk,
  deleteFavouriteThunk,
} from "../../redux/thunks/accountThunk/accountThunk";
import { useNavigate } from "react-router-dom";
import DetailsIcons from "../DetailsIcons/DetailsIcons";

const Park = ({
  id,
  name,
  description,
  photos,
  photosBackup,
  details,
  address,
}: IPark) => {
  const [firstError, setFirstError] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>(
    `${process.env.REACT_APP_API_URL}/${photos[0]}`
  );

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const { favParks } = useAppSelector(accountSelector);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavourite(favParks.includes(id!));
  }, [favParks, id]);

  const onImageError = (event: any) => {
    if (firstError) {
      setFirstError(false);
      if (photosBackup && photosBackup[0]) {
        setImageUrl(photosBackup[0]);
      } else {
        setImageUrl("images/columpiaDa.png");
      }
    } else {
      setImageUrl("images/columpiaDa.png");
    }
  };

  return (
    <ParkStyles>
      <section>
        <div className="card">
          <img
            className="card-image"
            //src="images/columpiaDa.png"
            src={imageUrl}
            alt="beautiful forest"
            onError={onImageError}
          />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <span>
              {address?.city}, {address?.address}
            </span>
            <h4>Details: </h4>

            <DetailsIcons details={details} />
          </div>

          <div className="button-container">
            <button
              className="button button--info"
              onClick={() => navigate(`/park/${id}`)}
            >
              <BsInfo className="mobile-button" />
              <span className="desktop-button">Details</span>
            </button>

            {!isFavourite && (
              <button
                className="button button--favourite"
                onClick={() => dispatch(addFavouriteThunk(id!))}
              >
                <ImHeart className="mobile-button" />
                <span className="desktop-button">Save</span>
              </button>
            )}
            {isFavourite && (
              <button
                className="button button--favourite"
                onClick={() => dispatch(deleteFavouriteThunk(id!))}
              >
                <ImHeart className="mobile-button" />
                <span className="desktop-button">Delete</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </ParkStyles>
  );
};

export default Park;
