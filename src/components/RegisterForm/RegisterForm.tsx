import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunk/userThunk";
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
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              id="name"
              type="text"
              value={user.name}
              onChange={(event) => handleChange(event)}
              placeholder="Name"
              autoComplete="off"
            />
          </label>
          <label>
            Username:
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(event) => handleChange(event)}
              placeholder="Username"
              autoComplete="off"
            />
          </label>
          <label>
            Password:
            <div className="slider">
              <input
                id="password"
                type="password"
                value={user.password}
                onChange={(event) => handleChange(event)}
                placeholder="Password"
                autoComplete="off"
              />
            </div>
          </label>
          <label>
            email:
            <input
              id="email"
              type="text"
              value={user.email}
              onChange={(event) => handleChange(event)}
              placeholder="Email"
              autoComplete="off"
            />
          </label>
          <label>
            City:
            <input
              id="city"
              type="text"
              value={user.city}
              onChange={(event) => handleChange(event)}
              placeholder="City"
              autoComplete="off"
            />
          </label>

          <div className="submitContainer">
            <input type="submit" value="Submit" disabled={buttonDisabled} />
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
