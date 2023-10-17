import React from "react";
import "./pageWrapper.css";

const PageWrapper = ({
  children,
  title,
}: {
  children: React.ReactElement;
  title: string;
}) => {
  return (
    <div className="page-wrapper">
      <div className="page-title">{title}</div>
      {children}
    </div>
  );
};

export default PageWrapper;
