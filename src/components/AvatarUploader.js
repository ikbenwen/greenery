import React, { useState } from 'react';
import axios from "axios";
import { ReactComponent as Spinner} from '../assets/refresh.svg';
import './Styles/AvatarUploader.css';


function AvatarSubmitForm() {

    const [avatar, setAvatar] = useState('');

    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    // let _handleReaderLoaded;


            let _handleReaderLoaded = (readerEvt) => {
            let binaryString = readerEvt.target.result
            this.setState({
                base64TextString: btoa(binaryString)
            })
        }


   let onFileSubmit = (e) => {
        e.preventDefault()
        const preview = document.getElementById('profile-picture');
        console.log("binary string:", this.state.base64TextString)

        let payload = {image: this.state.base64TextString}
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(resp => resp.json())
            .then(json => console.log(json))

        preview.src = "data.image/png;base64," + this.state.base64TextString
    }




async function onSubmit(event) {
       toggleLoading(true);
       setError('');

       event.preventDefault();

       try {
           const response = await axios.post('http://localhost:3000', {
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
        <div className="avatar-uploader">
            <h2>Upload Avatar</h2>
            {createUserSuccess === true && (
                <h2 className="message-succes">Avatar is geüpload</h2>
            )}
            <form className="avatar-form"
                  onSubmit={(e) => this.onSubmit(e)}
                  onChange={(e) => this.onChange(e)}>
                <input
                    type='file'
                    value={avatar}
                    name='image'
                    id='file'
                    accept='.jpeg, .png, jpg'
                    onChange ={ (e) => {
                        console.log("file to upload:", e.target.files[0])
                        let file = e.target.files[0]

                        if (file) {
                            const reader = new FileReader();

                            reader.onload = this._handleReaderLoaded.bind(this)

                            reader.readAsBinaryString(file)
                        }
                    }}
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
