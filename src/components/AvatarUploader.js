import React, { useState } from "react";
import './Styles/AvatarUploader.css';
import Spinner from '../assets/loader.gif'

export default function AvatarUploader() {

    const [baseImage, setBaseImage] = useState("")
    const [loading, toggleLoading] = useState(false);

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file)
        console.log(base64)
        setBaseImage(base64)
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div className="avatar-uploader-container">
            <form>
            <input
                type="file"
                onChange= { (e) => {
                    uploadImage(e);
                }}
            />
                <button
                    type='submit'
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? <Spinner className="loading-icon" /> : 'Upload Avatar' }
                </button>
            </form>
            <br></br>
            <img src={baseImage} height="200px"/>
        </div>
    )
}
