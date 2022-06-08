import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { createParkThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { IAddress, IPark, ParkDetail } from "../../redux/types/parkInterfaces";
import Map from "../Map/Map";

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

  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setParkLocation([position.coords.latitude, position.coords.longitude]);
    });
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
          location: { type: "Point", coordinates: parkLocation },
        },
        images
      )
    );
  };

  return (
    <form onSubmit={submitPark}>
      <h2>Create a new park</h2>
      {step === 0 && (
        <>
          <h3>Select park location</h3>
          <Map
            onLocationSelected={(loc) => setParkLocation(loc)}
            location={parkLocation}
          ></Map>
        </>
      )}

      {step === 1 && (
        <>
          <h3>Upload pictures of the park</h3>
          <input
            multiple
            id="photos"
            type="file"
            accept="image/png, image/jpg"
            onChange={(event) => {
              setImages(event.target.files ?? undefined);
            }}
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3>What does this park have?</h3>
          <select name="details" multiple>
            <option value={ParkDetail.swing}>{ParkDetail.swing}</option>
            <option value={ParkDetail.water}>{ParkDetail.water}</option>
            <option value={ParkDetail.shadow}>{ParkDetail.shadow}</option>
            <option value={ParkDetail.fence}>{ParkDetail.fence}</option>
            <option value={ParkDetail.bar}>{ParkDetail.bar}</option>
            <option value={ParkDetail.swimmingPool}>
              {ParkDetail.swimmingPool}
            </option>
            <option value={ParkDetail.bench}>{ParkDetail.bench}</option>
            <option value={ParkDetail.picnic}>{ParkDetail.picnic}</option>
            <option value={ParkDetail.pingPong}>{ParkDetail.pingPong}</option>
            <option value={ParkDetail.basket}>{ParkDetail.basket}</option>
            <option value={ParkDetail.bike}>{ParkDetail.bike}</option>
          </select>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Let others find it!</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={changeData}
            value={park.name}
          ></input>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={changeData}
            value={park.description}
          ></input>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={changeAddressData}
            value={address.city}
          ></input>
          <label htmlFor="city">Address</label>
          <input
            type="text"
            id="address"
            onChange={changeAddressData}
            value={address.address}
          ></input>
        </>
      )}

      {step >= 1 && (
        <button type="button" onClick={() => setStep(step - 1)}>
          Previous
        </button>
      )}
      {step < 3 && (
        <button type="button" onClick={() => setStep(step + 1)}>
          Next
        </button>
      )}
      {step >= 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default ParkForm;
