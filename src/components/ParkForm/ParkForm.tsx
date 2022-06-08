import { useEffect, useState } from "react";
import Map from "../Map/Map";

const ParkForm = () => {
  const [parkLocation, setParkLocation] = useState<[number, number]>([
    41.388014160598885, 2.185983541021393,
  ]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setParkLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  return (
    <>
      {step === 0 && (
        <Map
          onLocationSelected={(loc) => setParkLocation(loc)}
          location={parkLocation}
        ></Map>
      )}

      {step === 1 && <p>EL PASO 2</p>}

      {step === 2 && <p>EL PASO 3</p>}

      {step >= 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
      {step < 2 && <button onClick={() => setStep(step + 1)}>Next</button>}
      {step >= 2 && <button onClick={() => alert("GUARDADO!")}>Submit</button>}
    </>
  );
};

export default ParkForm;
