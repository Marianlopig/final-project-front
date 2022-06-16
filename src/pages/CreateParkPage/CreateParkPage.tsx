import ParkForm from "../../components/ParkForm/ParkForm";
import styled from "styled-components";

export const CreateParkPageStyles = styled.div`
  padding-bottom: 20px;
`;

const CreateParkPage = () => {
  return (
    <CreateParkPageStyles>
      <ParkForm edit={false} />
    </CreateParkPageStyles>
  );
};

export default CreateParkPage;
