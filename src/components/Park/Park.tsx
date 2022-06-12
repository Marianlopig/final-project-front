import { ParkStyles } from "./ParkStyles";
import { ImHeart } from "react-icons/im";
import { BsInfo, BsTreeFill } from "react-icons/bs";
import {
  GiKidSlide,
  GiBasketballBasket,
  GiWateringCan,
  GiWoodenFence,
  GiParkBench,
  GiTable,
} from "react-icons/gi";
import { BiBeer } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { RiPingPongFill, RiBikeLine } from "react-icons/ri";
import { IPark, ParkDetail } from "../../redux/types/parkInterfaces";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";
import {
  addFavouriteThunk,
  deleteFavouriteThunk,
} from "../../redux/thunks/accountThunk/accountThunk";
import { createProxyProxy } from "immer/dist/internal";

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

  useEffect(() => {
    setIsFavourite(favParks.includes(id!));
  }, [favParks, id]);

  const getIcon = (detail: string) => {
    let component;
    switch (detail) {
      case ParkDetail.swing:
        component = <GiKidSlide />;
        break;
      case ParkDetail.water:
        component = <GiWateringCan />;
        break;
      case ParkDetail.shadow:
        component = <BsTreeFill />;
        break;
      case ParkDetail.fence:
        component = <GiWoodenFence />;
        break;
      case ParkDetail.bar:
        component = <BiBeer />;
        break;
      case ParkDetail.swimmingPool:
        component = <MdPool />;
        break;
      case ParkDetail.bench:
        component = <GiParkBench />;
        break;
      case ParkDetail.picnic:
        component = <GiTable />;
        break;
      case ParkDetail.pingPong:
        component = <RiPingPongFill />;
        break;
      case ParkDetail.basket:
        component = <GiBasketballBasket />;
        break;
      case ParkDetail.bike:
        component = <RiBikeLine />;
        break;
    }

    return component;
  };

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

            <div className="details-container">
              {details.map((detail) => {
                return (
                  <div className="details-container--icons">
                    {getIcon(detail)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="button-container">
            <button className="button button--info">
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
