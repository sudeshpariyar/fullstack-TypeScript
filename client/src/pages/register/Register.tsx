import React, { useRef } from "react";
import "./register.css";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import axios from "axios";

const Register = () => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/generalinfo", {
        firstName: firstName.current,
        lastName: lastName.current,
        email: email.current,
        password: password.current,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          </form>
        </div>
      </PageWrapper>
    </>
  );
};

export default Register;
