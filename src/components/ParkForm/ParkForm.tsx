import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { createParkThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { IAddress, ParkDetail } from "../../redux/types/parkInterfaces";
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

const ParkForm = () => {
  const [parkLocation, setParkLocation] = useState<[number, number]>([
    41.388014160598885, 2.185983541021393,
  ]);

  const [park, setPark] = useState({
    id: "",
    name: "",
    description: "",
    photos: [],
    location: { type: "Point", coordinates: [] },
    details: [],
    owner: "",
  });

  const [address, setAddress] = useState<IAddress>({ city: "", address: "" });

  const [images, setImages] = useState<FileList>();

  const [step, setStep] = useState(0);

  const [checkedDetails, setCheckedDetails] = useState<any>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setParkLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setPark({ ...park, [event.target.id]: event.target.value });
  };

  const changeAddressData = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [event.target.id]: event.target.value });
  };

  const submitPark = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <h2>Create a new park</h2>
          {step === 0 && (
            <div className="container-steps">
              <h3>Select park location</h3>
              <Map
                onLocationSelected={(loc) => setParkLocation(loc)}
                location={parkLocation}
              ></Map>
            </div>
          )}

          {step === 1 && (
            <div className="container-steps--photos">
              <h3>Upload pictures</h3>
              <label className="input-container" htmlFor="file">
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
              <h3>What does this park have?</h3>
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
              <h3>Let others find it!</h3>
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
                placeholder="Ciudad"
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
          {step >= 3 && (
            <button className="button-create" type="submit">
              Create
            </button>
          )}
        </form>
      </div>
    </ParkFormStyles>
  );
};

export default ParkForm;