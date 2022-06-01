import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
