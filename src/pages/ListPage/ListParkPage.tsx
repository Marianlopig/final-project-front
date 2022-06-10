import ParkList from "../../components/ParkList/ParkList";
import { parksListSelector } from "../../redux/features/parksSlice/parkSlice";
import { useAppSelector } from "../../redux/hooks/hooks";

import styled from "styled-components";

const LoginFormStyles = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    display: flex;
    color: #0cc8d0;
    padding: 0px 20px 0px 20px;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
  }
`;

const ListParkPage = () => {
  const parks = useAppSelector(parksListSelector);

  return (
    <LoginFormStyles>
      <h1>Best playGrounds in your city</h1>
      <ParkList results={parks} />
    </LoginFormStyles>
  );
};

export default ListParkPage;
