import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ParkList from "./components/ParkList/ParkList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Spinner from "./components/Spinner/Spinner";
import LoginPage from "./pages/LoginPage/LoginPage";
import { parksListSelector } from "./redux/features/parksSlice/parkSlice";
import { uiShowSpinnerSelector } from "./redux/features/uiSlice/uiSlice";
import { useAppSelector } from "./redux/hooks/hooks";

const App = () => {
  const showSpinner = useAppSelector(uiShowSpinnerSelector);
  const parks = useAppSelector(parksListSelector);

  return (
    <div>
      <NavBar />
      <ParkList results={parks} />

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
