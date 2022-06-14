import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPark from "../../components/DetailPark/DetailPark";
import { parkSelector } from "../../redux/features/parkSlice/parkSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getParkDetailThunk } from "../../redux/thunks/parkThunk/parkThunk";

import styled from "styled-components";

export const DetailParkPageStyles = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const park = useAppSelector(parkSelector);

  useEffect(() => {
    dispatch(getParkDetailThunk(id as string));
  }, [dispatch, id]);

  return (
    <DetailParkPageStyles>
      <DetailPark park={park} />
    </DetailParkPageStyles>
  );
};

export default DetailPage;
