import React from "react";
import "./errorMessage.css";

const ErrorMessage = ({ errMessage }: { errMessage: string }) => {
  return <div className="error-wrapper">{errMessage}</div>;
};

export default ErrorMessage;
