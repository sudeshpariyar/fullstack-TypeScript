import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import Register from "./pages/register/Register";
import WelcomePage from "./pages/welcome/WelcomePage";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-wrapper">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
