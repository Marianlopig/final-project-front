import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  createParkThunk,
  editParkThunk,
} from "../../redux/thunks/parkThunk/parkThunk";
import { IAddress, IPark, ParkDetail } from "../../redux/types/parkInterfaces";
import Map from "../Map/Map";
import { ParkFormStyles } from "./ParkFormStyles";
import { AiOutlineCamera } from "react-icons/ai";
import {
  GiWateringCan,
  GiKidSlide,
  GiParkBench,
  GiTable,
  GiBasketballBasket,
  GiWoodenFence,
} from "react-icons/gi";
import { BsTreeFill } from "react-icons/bs";
import { BiBeer } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { RiBikeLine, RiPingPongFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export interface ParkFormProps {
  park?: IPark;
  edit: boolean;
}

const ParkForm = ({ park: currentPark, edit }: ParkFormProps) => {
  const [parkLocation, setParkLocation] = useState<[number, number]>([
    41.388014160598885, 2.185983541021393,
  ]);

  const [park, setPark] = useState(
    currentPark ?? {
      id: "",
      name: "",
      description: "",
      photos: [],
      photosBackup: [],
      location: { type: "Point", coordinates: [] },
      details: [],
      owner: "",
      address: {},
    }
  );

  const [address, setAddress] = useState<IAddress>(
    currentPark?.address ?? { city: "", address: "" }
  );

  const [images, setImages] = useState<FileList>();

  const [step, setStep] = useState(0);

  const [checkedDetails, setCheckedDetails] = useState<any>(
    currentPark?.details ?? []
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (edit && currentPark) {
      setParkLocation([
        currentPark.location.coordinates[0],
        currentPark.location.coordinates[1],
      ]);
    } else if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setParkLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, [edit, currentPark]);

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setPark({ ...park, [event.target.id]: event.target.value });
  };

  const changeAddressData = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [event.target.id]: event.target.value });
  };

  const submitPark = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (edit) {
      await dispatch(
        editParkThunk(
          {
            ...park,
            address,
            details: checkedDetails,
            location: { type: "Point", coordinates: parkLocation },
          },
          images
        )
      );

      navigate(`/park/${park.id}`);
    } else {
      await dispatch(
        createParkThunk(
          {
            ...park,
            address,
            details: checkedDetails,
            location: { type: "Point", coordinates: parkLocation },
          },
          images
        )
      );
      navigate(`/parks`);
    }
  };

  const parkDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const detail = event.target.id;
    if (checkedDetails.includes(detail)) {
      setCheckedDetails(checkedDetails.filter((det: any) => det !== detail));
    } else {
      setCheckedDetails([...checkedDetails, detail]);
    }
  };

  return (
    <ParkFormStyles>
      <div className="main-container">
        <form onSubmit={submitPark}>
          <h2>{!edit ? "Create a new park" : "Edit your park"}</h2>
          {step === 0 && (
            <div className="container-steps">
              <h3>{!edit ? "Select park location" : "Edit park Location"}</h3>
              <Map
                onLocationSelected={(loc) => setParkLocation(loc)}
                location={parkLocation}
              ></Map>
            </div>
          )}

          {step === 1 && (
            <div className="container-steps--photos">
              <h3>
                {!edit
                  ? "Upload pictures"
                  : "Change your pictures or add new ones"}
              </h3>
              <label className="input-container" htmlFor="file">
                {images && images[0] && (
                  <img
                    src={URL.createObjectURL(images[0])}
                    alt="park"
                    className="selected-image"
                  />
                )}

                {!(images && images[0]) &&
                  currentPark &&
                  currentPark.photosBackup &&
                  currentPark.photosBackup[0] && (
                    <img
                      src={currentPark.photosBackup[0]}
                      alt="park"
                      className="selected-image"
                    />
                  )}
                <AiOutlineCamera />
                <input
                  multiple
                  id="file"
                  type="file"
                  accept="image/png, image/jpg"
                  onChange={(event) => {
                    setImages(event.target.files ?? undefined);
                  }}
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="container-steps--icons">
              <h3>
                {!edit
                  ? "What does this park have?"
                  : "Change details from the park"}
              </h3>
              <div className="container-icons">
                <label>
                  <div className="items">
                    <GiKidSlide />
                    {ParkDetail.swing}
                  </div>
                  <input
                    id={ParkDetail.swing}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.swing)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <GiWateringCan />
                    {ParkDetail.water}
                  </div>
                  <input
                    id={ParkDetail.water}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.water)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <BsTreeFill />
                    {ParkDetail.shadow}
                  </div>
                  <input
                    id={ParkDetail.shadow}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.shadow)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <GiWoodenFence />
                    {ParkDetail.fence}
                  </div>
                  <input
                    id={ParkDetail.fence}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.fence)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <BiBeer />
                    {ParkDetail.bar}
                  </div>
                  <input
                    id={ParkDetail.bar}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.bar)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <MdPool />
                    {ParkDetail.swimmingPool}
                  </div>
                  <input
                    id={ParkDetail.swimmingPool}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.swimmingPool)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <GiParkBench />
                    {ParkDetail.bench}
                  </div>
                  <input
                    id={ParkDetail.bench}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.bench)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <GiTable />
                    {ParkDetail.picnic}
                  </div>
                  <input
                    id={ParkDetail.picnic}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.picnic)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <RiPingPongFill />
                    {ParkDetail.pingPong}
                  </div>
                  <input
                    id={ParkDetail.pingPong}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.pingPong)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <GiBasketballBasket />
                    {ParkDetail.basket}
                  </div>
                  <input
                    id={ParkDetail.basket}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.basket)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
                <label>
                  <div className="items">
                    <RiBikeLine />
                    {ParkDetail.bike}
                  </div>
                  <input
                    id={ParkDetail.bike}
                    type="checkbox"
                    checked={checkedDetails.includes(ParkDetail.bike)}
                    onChange={parkDetailChange}
                  ></input>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="container-name">
              <h3>
                {!edit ? "Let others find it!" : "Edit your park details"}
              </h3>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={changeData}
                value={park.name}
                placeholder="Park Name"
              ></input>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                onChange={changeData}
                value={park.description}
                placeholder="Description"
              ></input>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                onChange={changeAddressData}
                value={address.city}
                placeholder="City"
              ></input>
              <label htmlFor="city">Address</label>
              <input
                type="text"
                id="address"
                onChange={changeAddressData}
                value={address.address}
                placeholder="Address"
              ></input>
            </div>
          )}
          {step >= 3 && !edit && (
            <button className="button-create" type="submit">
              Create
            </button>
          )}

          {step >= 3 && edit && (
            <button className="button-create" type="submit">
              Edit
            </button>
          )}
          <div className="buttons">
            {step >= 1 && (
              <button
                className="button-previous"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                className="button-next"
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </ParkFormStyles>
  );
};

export default ParkForm;
