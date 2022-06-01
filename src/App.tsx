import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
