import React, { useState } from "react";
import './Styles/AvatarUploader.css';
import Spinner from '../assets/loader.gif'
import axios from "axios";

export default function AvatarUploader() {

    const [baseImage, setBaseImage] = useState("")
    const [loading, toggleLoading] = useState(false);

    const uploadImage = async (e) => {
        try {
            const response = await axios.put('http://localhost:8080/api/auth/user/putavatar', {
                avatar: e
            })

        } catch(e) {
            console.error(e);
        }
        // toggleLoading(false);
    }


    // const uploadImage = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertBase64(file)
    //     console.log(base64)
    //     setBaseImage(base64)
    // };

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };

    return (
        <div className="avatar-uploader-container">
            <form>
            <input
                type="text"
                name="avatar"
                id = "avatar"

            />
                <button
                    type='submit'
                    className="form-button"
                    disabled={loading}
                    onClick = { (e) => {
                        // console.log(document.getElementById("avatar").value);
                        uploadImage( document.getElementById("avatar").value);
                    }}
                >
                    {loading ? <Spinner className="loading-icon" /> : 'Upload Avatar' }
                </button>
            </form>
            <br></br>
            <img src={baseImage} height="200px"/>
        </div>
    )
}
