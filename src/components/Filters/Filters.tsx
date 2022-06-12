import { useState } from "react";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";
import { authSelector } from "../../redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { FiltersStyles } from "./FiltersStyles";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(authSelector);
  const { favParks } = useAppSelector(accountSelector);

  const [city, setCity] = useState("");
  const [isFilterExpanded, setFilterExpanded] = useState<boolean>(false);

  return (
    <FiltersStyles>
      <div className={`main-container${isFilterExpanded ? " expanded" : ""}`}>
        <div className="button-container">
          <button
            onClick={() =>
              dispatch(loadParksThunk({ ids: favParks.join(",") }))
            }
          >
            My Favourites
          </button>
          <button onClick={() => dispatch(loadParksThunk({ owner: userId }))}>
            Created by me
          </button>
        </div>
        <div className="input-container">
          <label htmlFor="bycity"> Filter by City:</label>
          <input
            type="text"
            id="bycity"
            placeholder="Write a city"
            autoComplete="off"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button onClick={() => dispatch(loadParksThunk({ city }))}>
            Filter
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          setFilterExpanded(!isFilterExpanded);
        }}
        className="container-filter"
      >
        <FaFilter />
      </div>
    </FiltersStyles>
  );
};

export default Filters;
