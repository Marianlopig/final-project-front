import ParkList from "../../components/ParkList/ParkList";
import { parksListSelector } from "../../redux/features/parksSlice/parksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { loadParksThunk } from "../../redux/thunks/parkThunk/parkThunk";

const ListParkStyles = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    display: flex;
    color: #0cc8d0;
    padding: 0px 20px 0px 20px;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;

const ListParkPage = () => {
  const parks = useAppSelector(parksListSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadParksThunk());
  }, [dispatch]);

  return (
    <ListParkStyles>
      <Filters />
      <h1>Find the best PlayGrounds</h1>
      <ParkList results={parks} />
    </ListParkStyles>
  );
};

export default ListParkPage;
