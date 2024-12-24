import React, { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { handleUserRegister } = useAuth();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
    // console.log('CREDS:', credentials)
  };
  return (
    <div>
      <div className="auth--container">
        <div className="form--wrapper">
          <form
            onSubmit={(e) => {
              handleUserRegister(e, credentials);
            }}
          >
            <div className="field--wrapper">
              <label>User_Name:</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={credentials.name}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
            <div className="field--wrapper">
              <label>Email:</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={credentials.email}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>

            <div className="field--wrapper">
              <label>Password1:</label>
              <input
                required
                type="password"
                name="password1"
                placeholder="Enter password..."
                value={credentials.password1}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>

            <div className="field--wrapper">
              <label>Confirm Password:</label>
              <input
                required
                type="password"
                name="password2"
                placeholder="confirm your password..."
                value={credentials.password2}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>

            <div className="field--wrapper">
              <input
                type="submit"
                value="Login"
                className="btn btn--lg btn--main"
              />
            </div>
          </form>

          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
