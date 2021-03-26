import React from "react";
import "./Styles/Upload.css"

import UploadFiles from "../components/upload-files.component";

export default function Upload(){
    return (
        <>
        <h1>Upload Files</h1>
        <div className="upload-container">
            <div>
                {/*<h2>upload Files</h2>*/}
            </div>

            <UploadFiles />
        </div>
        </>
    )
}
