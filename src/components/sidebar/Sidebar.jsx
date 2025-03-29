import React from "react";
import './Sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import as1_img from "../../components/img/as1.svg";
import as2_img from "../../components/img/as2.svg";
import as3_img from "../../components/img/as3.svg";
import as4_img from "../../components/img/as4.svg";
import as5_img from "../../components/img/as5.svg";
import as6_img from "../../components/img/as6.svg";
import as7_img from "../../components/img/as7.svg";
import as8_img from "../../components/img/as8.svg";
import as9_img from "../../components/img/as9.svg";
import as10_img from "../../components/img/as10.svg";
import as11_img from "../../components/img/as11.svg";
import Billing from "../../components/img/Billing.svg";
import Company from "../../components/img/company.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar_title">
          <h2>LOGO</h2>
        </div>
        <div className="sidebar_accordions_main">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><img src={as1_img} alt="" /> Website</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><Link to="/Website" className="active"><img className="sidebar_img" src={as2_img} alt="" /> Business Information</Link></li>
                  <li><Link><img className="sidebar_img" src={as3_img} alt="" /> Set Up Your Domain</Link></li>
                  <li><Link><img className="sidebar_img" src={as4_img} alt="" /> Select Your Template</Link></li>
                  <li><Link><img className="sidebar_img" src={as5_img} alt="" /> Customize Website</Link></li>
                  <li><Link><img className="sidebar_img" src={as6_img} alt="" /> Add Inventory</Link></li>
                  <li><Link><img className="sidebar_img" src={as7_img} alt="" /> Complete Payment</Link></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="sidebar_links_div">
              <ul>
                <li><Link to="/FTPAccess"><img className="sidebar_img" src={as8_img} alt="" /> FTP Access</Link></li>
                <li><Link to="/Settings"><img className="sidebar_img" src={as9_img} alt="" /> Settings</Link></li>
                <li><Link to="/ManUser"><img className="sidebar_img" src={as11_img} alt="" /> User</Link></li>
                <li><Link to="/Billing"><img className="sidebar_img" src={Billing} alt="" /> Billing</Link></li>
                <li><Link to="/Support"><img className="sidebar_img" src={as10_img} alt="" /> Support</Link></li>
                <li><Link to="/Company"><img className="sidebar_img" src={Company} alt="" /> Company</Link></li>
              </ul>
            </div> 
        </div>
      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
    </div>

  );
};

export default Sidebar