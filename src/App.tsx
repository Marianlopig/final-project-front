import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AntiRestrictedPages from "./components/AntiRestrictedPages/AntiRestrictedPages";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import RestrictedPages from "./components/RestrictedPages/RestrictedPages";
import Spinner from "./components/Spinner/Spinner";
import CreateParkPage from "./pages/CreateParkPage/CreateParkPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditPage from "./pages/EditPage/EditPage";
import ListParkPage from "./pages/ListPage/ListParkPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MapPage from "./pages/MapPage/MapPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { uiShowSpinnerSelector } from "./redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { loadAccountThunk } from "./redux/thunks/accountThunk/accountThunk";

const App = () => {
  const showSpinner = useAppSelector(uiShowSpinnerSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(loadAccountThunk());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Spinner show={showSpinner} />
      <Routes>
        <Route path="/" element={<Navigate to="/parks" />} />
        <Route
          path="/login"
          element={
            <AntiRestrictedPages>
              <LoginPage />
            </AntiRestrictedPages>
          }
        />
        <Route
          path="/new-user"
          element={
            <AntiRestrictedPages>
              <RegisterPage />
            </AntiRestrictedPages>
          }
        />
        <Route path="/parks" element={<ListParkPage />} />

        <Route
          path="/newpark"
          element={
            <RestrictedPages>
              <CreateParkPage />
            </RestrictedPages>
          }
        />

        <Route path="/park/:id" element={<DetailPage />} />
        <Route
          path="/park/:id/edit"
          element={
            <RestrictedPages>
              <EditPage />
            </RestrictedPages>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
