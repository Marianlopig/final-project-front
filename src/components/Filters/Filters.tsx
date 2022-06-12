import { useState } from "react";
import { accountSelector } from "../../redux/features/accountSlice/accountSlice";
import { authSelector } from "../../redux/features/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import { FiltersStyles } from "./FiltersStyles";
import { FaFilter } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Filters = () => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(authSelector);
  const { favParks } = useAppSelector(accountSelector);

  const [city, setCity] = useState("");
  const [isFilterExpanded, setFilterExpanded] = useState<boolean>(false);

  const token = localStorage.getItem("token");
  const MyFilters = () => (
    <div className="button-container">
      <button
        onClick={() => {
          dispatch(loadParksThunk({ ids: favParks.join(",") }));
          setFilterExpanded(!isFilterExpanded);
        }}
      >
        My Favourites
      </button>
      <button
        onClick={() => {
          dispatch(loadParksThunk({ owner: userId }));
          setFilterExpanded(!isFilterExpanded);
        }}
      >
        Created by me
      </button>
    </div>
  );

  return (
    <FiltersStyles>
      <div className={`main-container${isFilterExpanded ? " expanded" : ""}`}>
        {token && <MyFilters />}

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
          <div
            onClick={() => {
              setFilterExpanded(false);
            }}
            className="container-filter"
          >
            <MdClose />
          </div>
        </div>
      </div>
      {!isFilterExpanded && (
        <div
          onClick={() => {
            setFilterExpanded(true);
          }}
          className="container-filter"
        >
          <FaFilter />
        </div>
      )}
    </FiltersStyles>
  );
};

export default Filters;
