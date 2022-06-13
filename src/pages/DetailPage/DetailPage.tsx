import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPark from "../../components/DetailPark/DetailPark";
import { parkSelector } from "../../redux/features/parkSlice/parkSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getParkDetailThunk } from "../../redux/thunks/parkThunk/parkThunk";

const DetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const park = useAppSelector(parkSelector);

  useEffect(() => {
    dispatch(getParkDetailThunk(id as string));
  });

  return <DetailPark park={park} />;
};

export default DetailPage;
