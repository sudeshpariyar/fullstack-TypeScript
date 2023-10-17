import React, { useRef, useState } from "react";
import "./register.css";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import axios from "../../helper/ApiHelper";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const Register = () => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("generalinfo", {
        firstName: firstName.current,
        lastName: lastName.current,
        email: email.current,
        password: password.current,
      })
      .then((res) => {
        if (res.data) {
          navigate("/login");
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  return (
    <>
      <PageWrapper title="Register User">
        <div>
          <form className="register-form" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              required
              onChange={(e) => (firstName.current = e.target.value)}
            />
            <label>Last Name</label>
            <input
              required
              type="text"
              onChange={(e) => (lastName.current = e.target.value)}
            />
            <label>Email </label>
            <input
              type="email"
              required
              onChange={(e) => (email.current = e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => (password.current = e.target.value)}
            />
            <button className="register-submit-button" type="submit">
              Submit
            </button>
            {err && <ErrorMessage errMessage={err} />}
          </form>
        </div>
      </PageWrapper>
    </>
  );
};

export default Register;
