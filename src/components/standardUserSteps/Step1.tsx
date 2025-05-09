import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import SolidCheck from "../../components/img/solid_check.svg";
import Search from "../../components/img/search.svg";
import TemplatePreview from "../templatePreview/templatePreview";
import { Tooltip, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { HslColorPicker } from "react-colorful";
import { Colorful } from "@uiw/react-color";

const Step1 = () => {
  const [selectedPrimary, setSelectedPrimary] = useState("#416295ff");
  const [selectedSecondary, setSelectedSecondary] = useState("#00053aff");
  const [selectedText, setSelectedText] = useState("#ffffffff");
  const [selectedBtnColor, setSelectedBtnColor] = useState("#416295ff");
  const [selectedBtnColorText, setSelectedBtnColorText] = useState("#ffffffff");
  const [selectedFont, setSelectedFont] = useState("");
  const [hone, setHone] = useState("Welcome To our Website");


  return (
    <section className="StandardUserSteps_section">
      <div className="sus_title">
        <h3 className="step1_txt">Customize Your Website</h3>
      </div>
      <div className="customization-panel">
        {/* Header Section */}
        <h1>Elevate Your Experience with Smart UI/UX Design.</h1>
        <p>
          Unleash Design Tweaks, Customize Built Interfaces, Use The Tools To
          Help You Create A Website That Stands Out
        </p>

        <Row className="main-color-section">
          <Col xs={12} lg={5}>
            <div className="color_selection_section">
              <div className="color-section">
                <div className="color_section_inner">
                  <Row>
                    <Col xs={6}>
                      <div className="color_picker">
                        <h5>
                          Primary Color
                          {/* <Tooltip
                          title="These colors will be applied to your website’s Navbar and Footer"
                          arrow
                          placement="top"
                        >
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <HelpOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}
                        </h5>

                        <div className="color-options">
                          <Colorful
                            color={selectedPrimary}
                            onChange={(color) => {
								console.log(color)
                              setSelectedPrimary(color.hexa);
                            }}
                          />
                        </div>
                        <div>
                          {/* {primaryColors.map((color, index) => (
                        <div
                          key={index}
                          className={`color-circle ${
                            selectedPrimary === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handlePrimarySelect(color)}
                        >
                          {selectedPrimary === color && (
                            <img src={SolidCheck} className="tick-icon" alt="" />
                          )}
                        </div>
                      ))} */}
                          {/* <div className="color-inputs">
                        <p>OR</p>
                        <div className="color_input_inner">
                          <label htmlFor="">Write the color code here</label>
                          <input
                            type="text"
                            placeholder="HEX | FFFFFF"
                            value={selectedPrimary || ""}
                            onChange={(e) => handlePrimarySelect(e.target.value)}
                          />
                        </div>
                      </div> */}
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="color_picker">
                        <h5>
                          Secondary Color
                          {/* <Tooltip
                          title="These colors will be applied to your website’s background behind your content or static text."
                          arrow
                          placement="top"
                        >
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <HelpOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}
                        </h5>
                        <div className="color-options">
                          <Colorful
                            color={selectedSecondary}
                            onChange={(color) => {
                              setSelectedSecondary(color.hexa);
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="color_picker">
                        <h5>
                          Text Color
                          {/* <Tooltip
                          title="These colors will be applied to your website’s background behind your content or static text."
                          arrow
                          placement="top"
                        >
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <HelpOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}
                        </h5>
                        <div className="color-options">
                          <Colorful
                            color={selectedText}
                            onChange={(color) => {
                              setSelectedText(color.hexa);
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="color_picker">
                        <h5>
                          Button Color
                          {/* <Tooltip
                          title="These colors will be applied to your website’s background behind your content or static text."
                          arrow
                          placement="top"
                        >
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <HelpOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}
                        </h5>
                        <div className="color-options">
                          <Colorful
                            color={selectedBtnColor}
                            onChange={(color) => {
                              setSelectedBtnColor(color.hexa);
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="color_picker">
                        <h5>
                          Button Text Color
                          {/* <Tooltip
                          title="These colors will be applied to your website’s background behind your content or static text."
                          arrow
                          placement="top"
                        >
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <HelpOutlineIcon fontSize="small" />
                          </IconButton>
                        </Tooltip> */}
                        </h5>
                        <div className="color-options">
                          <Colorful
                            color={selectedBtnColorText}
                            onChange={(color) => {
                              setSelectedBtnColorText(color.hexa);
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="color_picker">
                        <h5 style={{ textAlign: "start" }}>
                          Typography Selection
                        </h5>
                        <p>
                          Customize The Font Styles, Sizes, And Weights Used
                          Throughout Your Website
                        </p>
                        <div className="typography-section">
                          <div className="typography-option">
                            <label>Header Fonts</label>

                            <select
                              value={selectedFont}
                              onChange={(e) => setSelectedFont(e.target.value)}
                            >
                              <option value='"Montserrat", sans-serif'>
                                Montserrat
                              </option>
                              <option value='"Roboto Mono", monospace'>
                                Roboto Mono
                              </option>
                              <option value='"Poppins", sans-serif'>
                                Poppins
                              </option>
                            </select>
                          </div>
                          {/* <div className="typography-option">
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
                          </div> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={7} className="template_preview">
            <div className="preview-scale-wrapper">
              <div className="preview-scaler">
                <TemplatePreview
                  hone={hone}
                  setHone={setHone}
                  primary={selectedPrimary}
                  secondary={selectedSecondary}
                  text={selectedText}
                  btnColor={selectedBtnColor}
                  btnColorText={selectedBtnColorText}
                  font={selectedFont}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Additional Elements Section */}
        {/* <h2>Additional Elements And Patterns</h2>
        <p>
          Adjust The Design Elements By Creating Or Subtle Background Patterns
        </p>
        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="Cust_inputs_inner">
              <label>Write the color code here</label>
              <input type="text" placeholder="HEX | FFFFFF" />
              <img src={Search} alt="" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="Cust_inputs_inner">
              <label>Write the color code here</label>
              <input type="text" placeholder="HEX | FFFFFF" />
              <img src={Search} alt="" />
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
};

export default Step1;
