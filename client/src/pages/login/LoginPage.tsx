import React, { useRef, useState } from "react";
import axios from "axios";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const LoginPage = () => {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/generalinfo/login", {
        email: email.current,
        password: password.current,
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          navigate("/welcome");
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  };
  return (
    <PageWrapper title="Login">
      <div>
        <form className="register-form" onSubmit={handleSubmit}>
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
  );
};

export default LoginPage;
