import { useEffect } from "react";
import PointsMap from "../../components/PointsMap/PointsMap";
import { parkPageSelector } from "../../redux/features/parksSlice/parksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import styled from "styled-components";

export const MapPageStyles = styled.div`
  overflow-x: hidden;

  h1 {
    color: #0cc8d0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }
`;

const MapPage = () => {
  const parks = useAppSelector(parkPageSelector);
  const dispatch = useAppDispatch();
  const url =
    "https://marian-lopez-back-final-project-202204.onrender.com/parks/list?page=0&pageSize=50";

  useEffect(() => {
    dispatch(loadParksThunk(undefined, url));
  }, [dispatch]);

  return (
    <MapPageStyles>
      <h1>Look for the closest parks</h1>
      <PointsMap {...parks} />
    </MapPageStyles>
  );
};

export default MapPage;
