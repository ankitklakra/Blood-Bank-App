import React from "react";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3"><Sidebar /></div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
