import { React, useState } from 'react';
import "./SettingComp.css";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const SettingComp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="FtpAccess_main">
                <div className="top_title">
                    <h3>Settings - Change Password</h3>
                </div>
                <div className="setting_text_div">
                    <h5>Change Your Password</h5>
                    <p>For security reasons, you can update your password by requesting a reset link. Click the button below, and we’ll send you an email with a link to change your password.</p>
                    <ul>
                        <li>🔹 Ensure your email is correct and accessible.</li>
                        <li>🔹 The reset link will expire after 15 minutes for security.</li>
                        <li>🔹 If you don’t receive an email, check your spam folder or try again.</li>
                    </ul>
                </div>
                <div className="last_right">
                    <Button onClick={handleShow}> Email Password Reset Link </Button>
                </div>
            </div>
            {/* Modal component */}
            <Modal size="lg" dialogClassName='setting_modal_main' show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>

                </Modal.Header>

                <Modal.Body>
                    <div className="setting_modal_inner">
                        <h5>Email Sent</h5>
                        <h6>We've sent a password reset link to [your@email.com]</h6>
                        <p>Didn’t receive the email? <Link>[Resend Link]</Link></p>
                        <Button variant="primary" onClick={handleClose}>
                           Confirm
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>


    )
}

export default SettingComp