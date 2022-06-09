import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { createParkThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { IAddress, ParkDetail } from "../../redux/types/parkInterfaces";
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

  const [checkedDetails, setCheckedDetails] = useState<any>([]);

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
          details: checkedDetails,
          location: { type: "Point", coordinates: parkLocation },
        },
        images
      )
    );
  };

  const handleOnChange = (detail: string) => {
    if (checkedDetails.includes(detail)) {
      setCheckedDetails(checkedDetails.filter((det: any) => det !== detail));
    } else {
      setCheckedDetails([...checkedDetails, detail]);
    }
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
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.swing)}
            onChange={() => handleOnChange(ParkDetail.swing)}
          ></input>
          {ParkDetail.swing}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.water)}
            onChange={() => handleOnChange(ParkDetail.water)}
          ></input>
          {ParkDetail.water}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.shadow)}
            onChange={() => handleOnChange(ParkDetail.shadow)}
          ></input>
          {ParkDetail.shadow}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.fence)}
            onChange={() => handleOnChange(ParkDetail.fence)}
          ></input>
          {ParkDetail.fence}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.bar)}
            onChange={() => handleOnChange(ParkDetail.bar)}
          ></input>
          {ParkDetail.bar}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.swimmingPool)}
            onChange={() => handleOnChange(ParkDetail.swimmingPool)}
          ></input>
          {ParkDetail.swimmingPool}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.bench)}
            onChange={() => handleOnChange(ParkDetail.bench)}
          ></input>
          {ParkDetail.bench}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.picnic)}
            onChange={() => handleOnChange(ParkDetail.picnic)}
          ></input>
          {ParkDetail.picnic}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.pingPong)}
            onChange={() => handleOnChange(ParkDetail.pingPong)}
          ></input>
          {ParkDetail.pingPong}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.basket)}
            onChange={() => handleOnChange(ParkDetail.basket)}
          ></input>
          {ParkDetail.basket}
          <input
            type="checkbox"
            checked={checkedDetails.includes(ParkDetail.bike)}
            onChange={() => handleOnChange(ParkDetail.bike)}
          ></input>
          {ParkDetail.bike}
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
