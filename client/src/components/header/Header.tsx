import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <h2 className="header-name">Header</h2>
        <div className="header-content-right">
          <button onClick={handleLogin}>
            <BiLogInCircle />
            <div>Login</div>
          </button>

          <button onClick={handleRegister}>
            <BiAddToQueue />
            <div>Register</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
