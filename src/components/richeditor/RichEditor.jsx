import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import './RichEditor.css';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store.tsx";
import { updateStepData } from "../../features/form/stepsFormSlice.ts";


const RichEditor = () => {
    const [content, setContent] = useState(""); 
    const dispatch = useDispatch();
    const textEditorData = useSelector((state: RootState) => state.form.step1.textEditorData);

    const handleEditorChange = (content: string) => {
        setContent(content); // optional local state
        dispatch(updateStepData({ step: "step1", data: { textEditorData: content } }));
      };
      
    return (
        <div className="RichTextEditor">
            <Editor
                apiKey="u9pjv8o1yxvgsnjv8cwhykz529vn8mn29unwdpsrx3gr33lx"
                initialValue={textEditorData}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
                    toolbar:
                        "undo redo | formatselect | bold italic backcolor | " +
                        "alignleft aligncenter alignright alignjustify | " +
                        "bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
            />
        </div>
    );
};

export default RichEditor;