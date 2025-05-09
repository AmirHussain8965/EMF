import React, { useState } from "react";
import ep_upload from "../../components/img/ep_upload.svg";
import "./UploadInput.css";
import { useDispatch , useSelector  } from "react-redux";
import { updateStepData } from "../../features/form/stepsFormSlice.ts";

const UploadInput = () => {
    const [imageName, setImageName] = useState("DummyData");
    const dispatch = useDispatch();
    const businessLogo = useSelector((state: RootState) => state.form.step1.businessLogo);

    const uniqueId = `file-upload-${Math.random().toString(36).substr(2, 9)}`;

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setImageName(file.name);
    
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(updateStepData({ step: "step1", data: {
                    businessLogo: {
                        name: file.name,
                        data: reader.result, // base64 string
                        }
                    }}));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="upload_image_inner" style={{ display: "flex", alignItems: "center" }}>
            <input
                type="text"
                value={businessLogo?.name || imageName}
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
