import React, { useState } from 'react';
import axios from "axios";
import { ReactComponent as Spinner} from '../assets/refresh.svg';



function AvatarSubmitForm() {

    const [avatar, setAvatar] = useState('');

    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

   async function onSubmit(event) {
       toggleLoading(true);
       setError('');

       event.preventDefault();

       try {
           const response = await axios.post('http://localhost:8080/api/auth/', {
               avatar: avatar
           });
           console.log(response.data);
           if (response.status === 200) {
               setCreateUserSuccess(true);
           }
       } catch(e) {
           console.error(e);
           if (e.message.includes('400')) {
               setError('Please choose a different file to upload');
           } else {
               setError('Oops! Something went wrong, please try again');
           }
       }
       toggleLoading(false);
   }



    return (
        <div className="AvatarUploader">
            <h2>Upload Avatar</h2>
            {createUserSuccess === true && (
                <h2 className="message-succes">Avatar is geüpload</h2>
            )}
            <form onSubmit={onSubmit}>
                <input
                    type='file'
                    value={avatar}
                    name='image'
                    id='file'
                    accept='.jpeg, .png, jpg'
                    onChange={(e) => setAvatar(e.target.files[0])}
                />
                <button
                    type='submit'
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? <Spinner className="loading-icon" /> : 'Upload Avatar' }
                </button>
                {error &&  <p>{error}</p>}
            </form>
        </div>
    );
}

export default AvatarSubmitForm;
