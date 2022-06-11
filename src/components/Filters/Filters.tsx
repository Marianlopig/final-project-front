import { useState } from "react";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";
import { authSelector } from "../../redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";

const Filters = () => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(authSelector);
  const { favParks } = useAppSelector(accountSelector);

  const [city, setCity] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(loadParksThunk({ ids: favParks.join(",") }))}
        >
          My Favourites
        </button>
        <button onClick={() => dispatch(loadParksThunk({ owner: userId }))}>
          Created by me
        </button>
      </div>
      <label htmlFor="bycity">
        <input
          type="text"
          id="bycity"
          placeholder="City"
          autoComplete="off"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={() => dispatch(loadParksThunk({ city }))}>
          Filter
        </button>
      </label>
    </div>
  );
};

export default Filters;
