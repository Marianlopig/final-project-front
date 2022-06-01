import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import { iUiSlice } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks/hooks";

const App = () => {
  const { showSpinner }: iUiSlice = useAppSelector(({ ui }) => ui);

  return (
    <div>
      <NavBar />

      <Spinner show={showSpinner} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-user" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
