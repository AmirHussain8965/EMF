import React, { useState } from "react";
import Sidebar from '../components/sidebar/Sidebar';
import Header from "../components/navbar/Header";
import ProgressTracker from "../components/progresstracker/ProgressTracker";

const Website = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="main">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className="content_main_div">
        <Header />
        <div className="content_inner_div">
          <ProgressTracker />
        </div>
      </div>
    </div>
  )
}

export default Website;