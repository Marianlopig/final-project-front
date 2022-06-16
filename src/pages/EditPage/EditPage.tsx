import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ParkForm from "../../components/ParkForm/ParkForm";
import { parkSelector } from "../../redux/features/parkSlice/parkSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getParkDetailThunk } from "../../redux/thunks/parkThunk/parkThunk";
import styled from "styled-components";

export const EditPageSytles = styled.div`
  padding-bottom: 20px;
`;

const EditPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const park = useAppSelector(parkSelector);

  useEffect(() => {
    dispatch(getParkDetailThunk(id as string));
  }, [dispatch, id]);

  return (
    <EditPageSytles>
      <ParkForm park={park} edit={true} />
    </EditPageSytles>
  );
};

export default EditPage;
