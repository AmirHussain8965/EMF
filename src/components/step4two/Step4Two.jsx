import React, { useState } from 'react';
import './Step4Two.css';
import { Row, Col, } from 'react-bootstrap';
import SolidCheck from "../../components/img/solid_check.svg"; 
import Search from "../../components/img/search.svg"; 

const Step4Two = () => {
    // Colors from the image
    const primaryColors = ['#862323', '#D93535', '#7F97A8', '#B03A73', '#EF8121', '#EE65E9', '#FFBA00', '#7A5FEE', '#34A853', '#6D6DBB', '#222D65', '#5100FF', '#FF0088', '#00FFAE', '#00FFF6', '#00FFAE', '#F3A2CD', '#FF0088', '#5100FF', '#222D65', '#6D6DBB', '#34A853', '#EF8121', '#7A5FEE', '#FFBA00', '#18A0FB',];
    const secondaryColors = ['#862323', '#D93535', '#7F97A8', '#B03A73', '#EF8121', '#EE65E9', '#FFBA00', '#7A5FEE', '#EF8121', '#34A853', '#6D6DBB', '#222D65', '#5100FF', '#FF0088', '#00FFAE', '#00FFF6', '#00FFAE', '#F3A2CD', '#FF0088', '#5100FF', '#222D65', '#6D6DBB', '#34A853', '#EF8121', '#7A5FEE', '#FFBA00', '#EE65E9', '#EF8121', '#18A0FB', '#D93535', '#862323',];
    const tertiaryColors = ['#862323', '#D93535', '#7F97A8', '#B03A73', '#EF8121', '#EE65E9', '#FFBA00', '#7A5FEE', '#EF8121', '#34A853', '#6D6DBB', '#222D65', '#5100FF', '#FF0088', '#00FFAE', '#00FFF6', '#00FFAE', '#F3A2CD', '#FF0088', '#5100FF', '#222D65', '#6D6DBB', '#34A853', '#EF8121', '#7A5FEE', '#FFBA00', '#EE65E9', '#EF8121', '#18A0FB', '#D93535', '#862323',];

    // State to track selected colors
    const [selectedPrimary, setSelectedPrimary] = useState(null);
    const [selectedSecondary, setSelectedSecondary] = useState(null);
    const [selectedTertiary, setSelectedTertiary] = useState(null);

    // Handlers for selecting colors
    const handlePrimarySelect = (color) => {
        setSelectedPrimary(color);
    };

    const handleSecondarySelect = (color) => {
        setSelectedSecondary(color);
    };

    const handleTertiarySelect = (color) => {
        setSelectedTertiary(color);
    };

    return (
        <div className="customization-panel">
            {/* Header Section */}
            <h1>Redefine User Experience With Professional UI/UX Enhancements!</h1>
            <p>
                Unleash Design Tweaks, Customize Built Interfaces, Use The Tools To Help You Create A Website That Stands Out
            </p>

            {/* Color Customization Section */}
            <h2>Color Customization</h2>

            {/* Primary Colors */}
            <div className="color-section">
                <h3>Primary Colors</h3>
                <div className="color_section_inner">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-options">
                                {primaryColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-circle ${selectedPrimary === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handlePrimarySelect(color)}
                                    >
                                        {selectedPrimary === color && (
                                            <img src={SolidCheck} className='tick-icon' alt="" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-inputs">
                                <p>OR</p>
                                <div className="color_input_inner">
                                    <label htmlFor="">Write the color code here</label>
                                    <input type="text" placeholder="HEX | FFFFFF" />
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>

            {/* Secondary Colors */}
            <div className="color-section">
                <h3>Secondary Colors</h3>
                <div className="color_section_inner">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-options">
                                {secondaryColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-circle ${selectedSecondary === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleSecondarySelect(color)}
                                    >
                                        {selectedSecondary === color && (
                                            <img src={SolidCheck} className='tick-icon' alt="" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-inputs">
                                <p>OR</p>
                                <div className="color_input_inner">
                                    <label htmlFor="">Write the color code here</label>
                                    <input type="text" placeholder="HEX | FFFFFF" />
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>

            {/* Tertiary Colors */}
            <div className="color-section">
                <h3>Tertiary Colors</h3>
                <div className="color_section_inner">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-options">
                                {tertiaryColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-circle ${selectedTertiary === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleTertiarySelect(color)}
                                    >
                                        {selectedTertiary === color && (
                                            <img src={SolidCheck} className='tick-icon' alt="" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="color-inputs">
                                <p>OR</p>
                                <div className="color_input_inner">
                                    <label htmlFor="">Write the color code here</label>
                                    <input type="text" placeholder="HEX | FFFFFF" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Typography Section */}
            <h2>Typography Selection</h2>
            <p>Customize The Font Styles, Sizes, And Weights Used Throughout Your Website</p>
            <div className="typography-section">
                <div className="typography-option">
                    <label>Header Fonts</label>
                    <select>
                        <option>Header Fonts</option>
                        <option>Roboto</option>
                        <option>Poppins</option>
                    </select>
                </div>
                <div className="typography-option">
                    <label>Body Fonts</label>
                    <select>
                        <option>Body Fonts</option>
                        <option>Roboto</option>
                        <option>Poppins</option>
                    </select>
                </div>
                <div className="typography-option">
                    <label>Customization</label>
                    <select>
                        <option>Font Size</option>
                        <option>14px</option>
                        <option>16px</option>
                    </select>
                </div>
            </div>

            {/* Additional Elements Section */}
            <h2>Additional Elements And Patterns</h2>
            <p>Adjust The Design Elements By Creating Or Subtle Background Patterns</p>
             <Row>
                <Col xs={12} md={6} xl={6}>
                    <div className="Cust_inputs_inner">
                        <label>Write the color code here</label>
                        <input type="text" placeholder='HEX | FFFFFF' />
                        <img src={Search} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="Cust_inputs_inner">
                        <label>Write the color code here</label>
                        <input type="text" placeholder='HEX | FFFFFF' />
                        <img src={Search} alt="" />
                    </div>
                </Col>
             </Row>
        </div>
    );
};

export default Step4Two;