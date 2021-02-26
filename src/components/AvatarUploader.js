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

    async function SavePhoto(inp)
    {
        let formData = new FormData();
        let photo = inp.files[0];

        formData.append("photo", photo);

        await axios.post("http://localhost:3000/upload/image/", formData);
    }

    return (
        <div className="avatar-uploader-container">
            <input id="image-file" type="file"
                   onChange = { (e) => {
                       console.log(document.getElementById("image-file"))
                       SavePhoto( document.getElementById("image-file"));
                   }}
            />

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
