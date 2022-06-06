import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/authThunk/authThunk";
import { RegisterFormStyles } from "./RegisterFormStyles";

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    city: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username !== "" && user.password !== "" && user.email !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerThunk(user));
    navigate("/");
  };

  return (
    <RegisterFormStyles>
      <div className="container">
        <h2>Create a new account</h2>
        <form noValidate onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={(event) => handleChange(event)}
            placeholder="Name"
            autoComplete="off"
          />
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(event) => handleChange(event)}
            placeholder="Username"
            autoComplete="off"
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(event) => handleChange(event)}
            placeholder="Password"
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(event) => handleChange(event)}
            placeholder="Email"
            autoComplete="off"
          />
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={user.city}
            onChange={(event) => handleChange(event)}
            placeholder="City"
            autoComplete="off"
          />
          <div className="submitContainer">
            <button type="submit" value="Submit" disabled={buttonDisabled}>
              Create Account
            </button>
          </div>
          <div className="link">
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
