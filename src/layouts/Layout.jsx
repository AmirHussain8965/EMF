import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/navbar/Header";
import "../layouts/Layout.css"; 

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="main">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="content_main_div">
        <Header />
        <div className="content_inner_div">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
