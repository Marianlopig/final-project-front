import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormStyles } from "./LoginFormStyles";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { LoginData } from "../../redux/types/userInterfaces";
import { loginThunk } from "../../redux/thunks/authThunk/authThunk";

const LoginForm = () => {
  const navigate = useNavigate();
  const blankData: LoginData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "")
      setButtonDisabled(false);
    else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const resetForm = () => {
    setFormData(blankData);
  };

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm();
    const res = await dispatch(loginThunk(formData));
    if (!(res && res.error)) {
      navigate("/parks");
    }
  };

  return (
    <LoginFormStyles>
      <div className="container">
        <h2>Please, insert your username and password!</h2>
        <form autoComplete="off" noValidate onSubmit={submitLogin}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={formData.username}
            onChange={changeData}
            placeholder="Username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={changeData}
            placeholder="Password"
          />
          <div className="submitContainer">
            <button disabled={buttonDisabled} type="submit">
              LogIn
            </button>
          </div>
          <div className="link">
            <Link to="/new-user">Create an account</Link>
          </div>
        </form>
      </div>
    </LoginFormStyles>
  );
};
export default LoginForm;
