import ParkList from "../../components/ParkList/ParkList";
import { parksListSelector } from "../../redux/features/parksSlice/parkSlice";
import { useAppSelector } from "../../redux/hooks/hooks";

const ListParkPage = () => {
  const parks = useAppSelector(parksListSelector);

  return <ParkList results={parks} />;
};

export default ListParkPage;
