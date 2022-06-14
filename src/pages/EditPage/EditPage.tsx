import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ParkForm from "../../components/ParkForm/ParkForm";
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

  return <ParkForm park={park} edit={true} />;
};

export default EditPage;
