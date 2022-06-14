import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const AntiRestrictedPages = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("NO RESTRICTEEEEEEED");

    if (token) {
      navigate("/parks");
    }
  }, [navigate, token]);
  return children;
};

export default AntiRestrictedPages;
