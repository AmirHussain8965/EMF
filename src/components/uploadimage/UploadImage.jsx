import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ep_upload2 from "../../components/img/ep_upload2.svg";
import cancel from "../../components/img/cancel.svg";
import "./UploadImage.css";

const UploadImage = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        if (files.length + acceptedFiles.length > 4) {
            alert("You can only upload up to 4 images.");
            return;
        }

        const updatedFiles = acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
        );
        setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    };

    // Function to remove an image
    const removeImage = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: ".eps", // Accept only EPS files
        multiple: true,
    });

    return (
        <div>
        <div className="upload_image_main">
            <h6>Upload Images* (Max 4)</h6>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} disabled={files.length >= 4} />
                <img src={ep_upload2} alt="Upload Icon" />
                <p>Drag & Drop Images Or Upload From This Device</p>
                <small>Vector Images in EPS Format</small>
                <small>Size Should Be <b>1400 x 500</b></small>
                {files.length >= 4 && <p style={{ color: "red" }}>Max upload limit reached</p>}
            </div>
        </div>
        {/* Show uploaded images with delete button */}
        <p className="upload_p_txt">*You can only upload a maximum of 4 images</p>
        <div className="image-preview">
                {files.map((file, index) => (
                    <div key={index} className="image-container">
                        <img src={file.preview} alt="Preview" className="preview-img"/>
                        <button className="remove-btn" onClick={() => removeImage(index)}><img src={cancel} alt="..."/></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadImage;
