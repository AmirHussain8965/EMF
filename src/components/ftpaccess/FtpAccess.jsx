
import './FtpAccess.css'; // We'll create this CSS file next
import { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";

import './FtpAccess.css';

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
            navigator.clipboard.writeText(ref.current.value)
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
                    console.error('Failed to copy: ', err);
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
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
                                onClick={() => copyToClipboard(hostnameRef, 'hostname')}
                            />
                            {tooltip.visible && tooltip.field === 'hostname' && (
                                <span className="tooltip">Copied</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="Ftp_Form_input_div">
                    <label>Port</label>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            defaultValue="21"
                            ref={portRef}
                        />
                        <div className="icon-container">
                            <IoCopyOutline
                                className="copy-icon"
                                onClick={() => copyToClipboard(portRef, 'port')}
                            />
                            {tooltip.visible && tooltip.field === 'port' && (
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
                                onClick={() => copyToClipboard(usernameRef, 'username')}
                            />
                            {tooltip.visible && tooltip.field === 'username' && (
                                <span className="tooltip">Copied</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="Ftp_Form_input_div">
                    <label>FTP Password</label>
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            defaultValue="password123"
                            ref={passwordRef}
                        />
                        <div className="icons-wrapper">
                            <div className="icon-container">
                                <IoCopyOutline
                                    className="copy-icon"
                                    onClick={() => copyToClipboard(passwordRef, 'password')}
                                />
                                {tooltip.visible && tooltip.field === 'password' && (
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
                        <input
                            type="text"
                            defaultValue="/public_html"
                            ref={rootDirRef}
                        />
                        <div className="icon-container">
                            <IoCopyOutline
                                className="copy-icon"
                                onClick={() => copyToClipboard(rootDirRef, 'rootDir')}
                            />
                            {tooltip.visible && tooltip.field === 'rootDir' && (
                                <span className="tooltip">Copied</span>
                            )}
                        </div>
                    </div>
                </div>

                <button className="test-connection-btn">Test Connection</button>
            </div>
        </div>
    );
}

export default FtpAccess;