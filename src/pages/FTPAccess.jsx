import React, { useState } from "react";
import Sidebar from '../components/sidebar/Sidebar';
import Header from "../components/navbar/Header";
import FtpAccess from "../components/ftpaccess/FtpAccess";


const Ftp = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="main">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className="content_main_div">
        <Header />
        <div className="content_inner_div">
          <FtpAccess />
        </div>
      </div>
    </div>
  )
}

export default Ftp;