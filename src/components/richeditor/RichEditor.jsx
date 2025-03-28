import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import './RichEditor.css';

const RichEditor = () => {
    const [setContent] = useState("");

    const handleEditorChange = (newContent) => {
        setContent(newContent);
        console.log("Content:", newContent);
    };

    return (
        <div className="RichTextEditor">
            <Editor
                apiKey="u9pjv8o1yxvgsnjv8cwhykz529vn8mn29unwdpsrx3gr33lx" // Optional but recommended
                initialValue=""
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
