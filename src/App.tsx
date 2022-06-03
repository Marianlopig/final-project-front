import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Park from "./components/Park/Park";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import { uiShowSpinnerSelector } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks/hooks";

const App = () => {
  const showSpinner = useAppSelector(uiShowSpinnerSelector);

  return (
    <div>
      <NavBar />
      <Park />

      <Spinner show={showSpinner} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-user" element={<RegisterForm />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
