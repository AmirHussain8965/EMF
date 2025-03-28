import React, { useState } from "react";
import ep_upload from "../../components/img/ep_upload.svg";
import "./UploadInput.css";

const UploadInput = () => {
    const [imageName, setImageName] = useState("Logo.png");
    const uniqueId = `file-upload-${Math.random().toString(36).substr(2, 9)}`; // Generate unique id

    const handleImageUpload = (event) => {
        if (event.target.files.length > 0) {
            setImageName(event.target.files[0].name);
        }
    };

    return (
        <div className="upload_image_inner" style={{ display: "flex", alignItems: "center" }}>
            <input
                type="text"
                value={imageName}
                readOnly
                placeholder=""
            />
            <label htmlFor={uniqueId} className="upload_image_steps">
                <img src={ep_upload} alt="Upload" />
            </label>
            <input
                id={uniqueId} 
                type="file" 
                accept="image/*" 
                style={{ display: "none" }} 
                onChange={handleImageUpload} 
            />
        </div>
    );
};

export default UploadInput;
