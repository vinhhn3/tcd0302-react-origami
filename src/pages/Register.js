import React, { useContext, useState } from "react";
import OrigamiContext from "../context/origami/origamiContext";
const Register = () => {
  const origamiContext = useContext(OrigamiContext);
  const { registerUser } = origamiContext;
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });
  const [rePassword, setRePassword] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (rePassword !== register.password) {
      alert("Password and Re-password don't match");
      return;
    }
    registerUser(register);
  };

  return (
    <div className="Register">
      <h1>Register Page</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="username"
            value={register.username}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={register.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Re-password</label>
          <input
            type="password"
            name="re-password"
            value={rePassword}
            onChange={onChangeRePassword}
          />
        </div>
        <div className="form-control">
          <button type="submit" onClick={onRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
