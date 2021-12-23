import React, { useContext, useState } from "react";
import OrigamiContext from "../context/origami/origamiContext";

const Login = () => {
  const origamiContext = useContext(OrigamiContext);
  const { loginUser } = origamiContext;
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    loginUser(login);
  };
  return (
    <div className="Login">
      <h1>Login Page</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="username"
            value={login.username}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <button type="submit" onClick={onLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
