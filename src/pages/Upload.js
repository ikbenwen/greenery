import React from "react";
import "./Styles/Upload.css"

import UploadFiles from "../components/upload-files.component";

export default function Upload(){
    return (
        <>
        <h1>Upload your garden diary files</h1>
        <div className="upload-container">
            <UploadFiles />
        </div>
        </>
    )
}
