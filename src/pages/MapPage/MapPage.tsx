import { useEffect } from "react";
import PointsMap from "../../components/PointsMap/PointsMap";
import { parkPageSelector } from "../../redux/features/parksSlice/parksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";
import styled from "styled-components";

export const MapPageStyles = styled.div`
  h1 {
    color: #0cc8d0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 20px;
  }
`;

const MapPage = () => {
  const parks = useAppSelector(parkPageSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadParksThunk());
  }, [dispatch]);

  return (
    <MapPageStyles>
      <h1>Look for the closest parks</h1>
      <PointsMap {...parks} />
    </MapPageStyles>
  );
};

export default MapPage;
