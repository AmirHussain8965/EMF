import React from 'react';
import './Header.css';
import Bell from "../../components/img/Bell.svg";
import CarbonHelp from "../../components/img/carbon_help.svg";
import Profile from "../../components/img/profile.svg";

const Header = () => {
    return (
        <section className="navbar_section">
            <div className="header_left_txt">
                <div>
                    <h3>Welcome, Sarah !</h3>
                    <p>Let’s set up your dealership website and get you online in no time.</p>
                </div>
            </div>
            <div className="header_right_icons">
                <div className="header_right_icons_inner">
                    <img src={Bell} alt="" />
                    <span></span>
                </div>
                <div className="header_right_icons_inner">
                    <img src={CarbonHelp} alt="" />
                </div>
                <div className="header_right_icons_inner2">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Header

