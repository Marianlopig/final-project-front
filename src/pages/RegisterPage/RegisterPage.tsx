import RegisterForm from "../../components/RegisterForm/RegisterForm";

import styled from "styled-components";

export const RegisterPageStyles = styled.div`
  padding-bottom: 20px;
`;

const RegisterPage = () => {
  return (
    <RegisterPageStyles>
      <RegisterForm />
    </RegisterPageStyles>
  );
};

export default RegisterPage;
