import React from 'react';
import AvatarUploader from "../components/AvatarUploader";
import './Styles/UpdateUser.css';

export default function UpdateUser() {
    return (
        <>
            <div className="update-page-container">
            <AvatarUploader />
            </div>
        </>
    )
}
