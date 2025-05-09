import "./FtpAccess.css"; // We'll create this CSS file next
import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import "../standardUserSteps/StandardUserSteps.css";
import { Row, Col } from "react-bootstrap";
import UploadInput from "../upload_input/UploadInput";
import UploadImage from "../uploadimage/UploadImage";

import "./FtpAccess.css";

function FtpAccess() {
  const [showPassword, setShowPassword] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, field: null });

  const hostnameRef = useRef(null);
  const portRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rootDirRef = useRef(null);

  const copyToClipboard = (ref, field) => {
    if (ref.current) {
      navigator.clipboard
        .writeText(ref.current.value)
        .then(() => {
          // Reset any existing tooltip
          setTooltip({ visible: false, field: null });
          // Show new tooltip
          setTooltip({ visible: true, field });
          setTimeout(() => {
            setTooltip({ visible: false, field: null });
          }, 2000); // Tooltip disappears after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <div className="settings-items">
          <section className="StandardUserSteps_section">
            <div className="top_title">
              <h3>Add Inventory</h3>
            </div>
            <div className="StandardUserSteps_inputs_main">
              {/* <h4 className="steps_subtitle">Upload Data</h4> */}
              <Row className="upload_main_row">
                <Col className="pe-5" xs={12} md={6} xl={6}>
                  <div className="steps_input_div">
                    <h6>
                      Use an existing market database to import information
                    </h6>
                    <UploadInput />
                  </div>
                </Col>
                <p className="or_txt">OR</p>
                <Col className="ps-5" xs={12} md={6} xl={6}>
                  <div className="steps_input_div">
                    <h6>Upload your custom data via an Excel file</h6>
                    <UploadInput />
                  </div>
                </Col>
              </Row>
              {/* <h4 className="steps_subtitle">Add Details Manually <span>(Optional)</span></h4>
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Product Name*</label>
                                <input type="text" placeholder="Cardeals" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Product Description*</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Price*</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>SKU/ID</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Stock Quantity</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>color options</label>
                                <input type="text" placeholder="" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <UploadImage />
                        </Col>
                    </Row> */}
              <Row style={{ marginTop: "20px" }}>
                <Col xs={12} md={6} xl={6}>
                  <div className="step5_check_box">
                    <input
                      type="checkbox"
                      id="SiteMapping"
                      name="SiteMapping"
                    />
                    <label htmlFor="SiteMapping">Site Mapping</label>
                  </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                  <div className="step5_check_box">
                    <input type="checkbox" id="SSlCert" name="SSlCert" />
                    <label htmlFor="SSlCert">SSl Cert</label>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
      <div className="FtpAccess_main">
        <div className="top_title">
          <h3>FTP Access Details</h3>
        </div>
        <div className="Ftp_Form_main">
          <div className="Ftp_Form_input_div">
            <label>FTP Hostname</label>
            <div className="input-wrapper">
              <input
                type="text"
                defaultValue="ftp.yourwebsite.com"
                ref={hostnameRef}
              />
              <div className="icon-container">
                <IoCopyOutline
                  className="copy-icon"
                  onClick={() => copyToClipboard(hostnameRef, "hostname")}
                />
                {tooltip.visible && tooltip.field === "hostname" && (
                  <span className="tooltip">Copied</span>
                )}
              </div>
            </div>
          </div>

          <div className="Ftp_Form_input_div">
            <label>Port</label>
            <div className="input-wrapper">
              <input type="text" defaultValue="21" ref={portRef} />
              <div className="icon-container">
                <IoCopyOutline
                  className="copy-icon"
                  onClick={() => copyToClipboard(portRef, "port")}
                />
                {tooltip.visible && tooltip.field === "port" && (
                  <span className="tooltip">Copied</span>
                )}
              </div>
            </div>
          </div>

          <div className="Ftp_Form_input_div">
            <label>FTP Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                defaultValue="yourusername"
                ref={usernameRef}
              />
              <div className="icon-container">
                <IoCopyOutline
                  className="copy-icon"
                  onClick={() => copyToClipboard(usernameRef, "username")}
                />
                {tooltip.visible && tooltip.field === "username" && (
                  <span className="tooltip">Copied</span>
                )}
              </div>
            </div>
          </div>

          <div className="Ftp_Form_input_div">
            <label>FTP Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
                ref={passwordRef}
              />
              <div className="icons-wrapper">
                <div className="icon-container">
                  <IoCopyOutline
                    className="copy-icon"
                    onClick={() => copyToClipboard(passwordRef, "password")}
                  />
                  {tooltip.visible && tooltip.field === "password" && (
                    <span className="tooltip">Copied</span>
                  )}
                </div>
                {showPassword ? (
                  <FaEye
                    className="eye-icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="eye-icon"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="Ftp_Form_input_div">
            <label>Root Directory</label>
            <div className="input-wrapper">
              <input type="text" defaultValue="/public_html" ref={rootDirRef} />
              <div className="icon-container">
                <IoCopyOutline
                  className="copy-icon"
                  onClick={() => copyToClipboard(rootDirRef, "rootDir")}
                />
                {tooltip.visible && tooltip.field === "rootDir" && (
                  <span className="tooltip">Copied</span>
                )}
              </div>
            </div>
          </div>

          <button className="test-connection-btn">Test Connection</button>
        </div>
      </div>
    </>
  );
}

export default FtpAccess;
