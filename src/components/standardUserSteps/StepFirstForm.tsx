import React from "react";
import './StandardUserSteps.css';
import { Col, Row } from 'react-bootstrap';
import RichEditor from "../richeditor/RichEditor.jsx";
// import ep_upload from "../../components/img/ep_upload.svg";
import { Link } from "react-router-dom";
import UploadInput from "../upload_input/UploadInput.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store.tsx";
import { updateStepData  } from "../../features/form/stepsFormSlice.ts";



const Step3 = ({ onNext }: { onNext: () => void }) => {
    
    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.form);
    const stepData = useSelector((state: RootState) => state.form.step1);

    useEffect(() => {
        console.log("Updated formState:", formState);
        }, [formState]);

    const handleSubmit = async () => {
        const response = await fetch("/api/step1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(stepData),
        });
    
        if (response.ok) {
            onNext();
        } else {
            alert("Please fix the issues before continuing.");
        }
    };

    const handleChange = (field: keyof typeof stepData, value: any) => {
        dispatch(updateStepData({ step: "step1", data: { [field]: value } }));
      };
      
    

    return (
        <div>
            <section className='StandardUserSteps_section'>
                <div className="sus_title">
                    <h3 className='step1_txt'>Provide Business Information</h3>
                </div>
                <div className="StandardUserSteps_inputs_main">
                    <Row>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Name*</label>
                                <input
                                    value={stepData.businessName || ""}
                                    onChange={(e) => handleChange("businessName", e.target.value)}
                                    type="text"
                                    placeholder="Cardeals" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Tagline</label>
                                <input type="text"
                                 value={stepData.businessTagline || ""}
                                 onChange={(e) => handleChange("businessTagline", e.target.value)}
                                 placeholder="Your comfort matters to us" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Business Logo*</label>
                                <UploadInput/>
                                <p>Don’t have a logo? <Link to={"#"}>Contact us</Link> to get a customized logo </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Operating Hours</label>
                                <input type="text"
                                    value={stepData.operatingHours || ""}
                                    onChange={(e) => handleChange("operatingHours", e.target.value)}
                                    placeholder="9:00 am - 6:00 pm " />placeholder ="9:00am - 6:00pm"
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Phone Number*</label>
                                <input type="text"
                                 value={stepData.phoneNumber || ""}
                                 onChange={(e) => handleChange("phoneNumber", e.target.value)}
                                  placeholder="123-456-7890" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <div className="steps_input_div">
                                <label>Email Address*</label>
                                <input type="text"
                                 value={stepData.emailAddress || ""}
                                 onChange={(e) => handleChange("emailAddress", e.target.value)}
                                  placeholder="cardeals@gmail.com" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <div className="steps_input_div">
                                <label>Address*</label>
                                <input type="text"
                                 value={stepData.address || ""}
                                 onChange={(e) => handleChange("address", e.target.value)}
                                  placeholder="Newyork, United states" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={12}>
                            <div>
                                <RichEditor/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Step3

