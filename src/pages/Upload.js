import React from "react";
import "./Styles/Upload.css"

import UploadFiles from "../components/upload-files.component";

function Upload(){
    return (
        <div className="upload-container">
            <div>
                <h2>upload Files</h2>
            </div>

            <UploadFiles />
        </div>
    )
}

export default Upload;
