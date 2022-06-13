import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Spinner from "./components/Spinner/Spinner";
import CreateParkPage from "./pages/CreateParkPage/CreateParkPage";
import DetailPage from "./pages/DetailPage/DetailPage";
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
        <Route path="/newpark" element={<CreateParkPage />} />
        <Route path="/park/:id" element={<DetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
