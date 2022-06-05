import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ParkList from "./components/ParkList/ParkList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Spinner from "./components/Spinner/Spinner";
import ListParkPage from "./pages/ListPage/ListParkPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { uiShowSpinnerSelector } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks/hooks";

const App = () => {
  const showSpinner = useAppSelector(uiShowSpinnerSelector);

  return (
    <div>
      <NavBar />

      <Spinner show={showSpinner} />
      <Routes>
        <Route path="/" element={<Navigate to="/parks" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-user" element={<RegisterForm />} />
        <Route path="/parks" element={<ListParkPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
