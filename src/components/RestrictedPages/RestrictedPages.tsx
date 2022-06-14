import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const RestrictedPages = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("RESTRICTEEEEEEED");

    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
};

export default RestrictedPages;
