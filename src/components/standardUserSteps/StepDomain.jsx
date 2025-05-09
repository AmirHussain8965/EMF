import React, { useEffect } from "react";
import "./StandardUserSteps.css";
import { Col, Row, Modal, Button } from "react-bootstrap";
import search from "../../components/img/search.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Step2 = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [domainInput, setDomainInput] = React.useState("");
  const [verificationInput, setVerificationInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleShow = () => {
    setShowModal(true);
    setVerificationInput("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleClose = () => {
    setShowModal(false);
    setVerificationInput("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  useEffect(() => {
    console.log("verify code:", verificationInput);
  }, [verificationInput]);

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("/api/verify-domain/", {
        code: verificationInput,
      });

      if (response.data.success) {
        setSuccessMessage("Domain verified successfully!");
        // optionally close modal after a delay
        setTimeout(() => handleClose(), 2000);
      } else {
        setErrorMessage("Invalid verification code. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="settings-items">
      <section className="StandardUserSteps_section">
        <div className="top_title">
          <h3>Set up Your Domain</h3>
        </div>
        <div className="StandardUserSteps_inputs_main">
          <Row>
            <Col xs={12} md={6} xl={6}>
              <div className="steps_input_div">
                <label>Use Existing Domain</label>
                <input
                  type="text"
                  placeholder=""
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                />
              </div>
              <div>
                <Button
                  className="common_btn"
                  onClick={handleShow}
                  disabled={!domainInput}
                >
                  Verify your Domain
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} xl={6}>
              <div className="steps_input_div">
                <label>Search for a New Domain</label>
                <input type="text" placeholder="" />
                <img src={search} alt="" />
              </div>
            </Col>

            <Col xs={12} md={6} xl={6}>
              <div className="steps_input_div">
                <label>Subdomain Option</label>
                <input type="text" placeholder="" />
                <p>
                  Don’t have a domain? <Link>Create a subdomain</Link> using our
                  platform (e.g., dealershipname.platform.com).
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Domain Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="steps_input_div">
            <label>Verification Code (6 digits)</label>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={verificationInput}
              onChange={(e) => setVerificationInput(e.target.value)}
              maxLength={6}
            />
          </div>
          {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
          {successMessage && (
            <p className="text-success mt-2">{successMessage}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!verificationInput || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Step2;
