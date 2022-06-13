import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EditParkForm from "../../components/EditParkForm/EditParkForm";
import { parkSelector } from "../../redux/features/parkSlice/parkSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getParkDetailThunk } from "../../redux/thunks/parkThunk/parkThunk";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const park = useAppSelector(parkSelector);

  useEffect(() => {
    dispatch(getParkDetailThunk(id as string));
  }, [dispatch, id]);

  return <EditParkForm currentPark={park} />;
};

export default EditPage;
