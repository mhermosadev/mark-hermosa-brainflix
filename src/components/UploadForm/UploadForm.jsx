import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const UploadForm = () => {

    const [focus, setFocus] = useState(''); 
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleOnChangeValue = (event) => {
        setTitle(event.target.value)
    }

    const descriptionOnChangeValue = (event) => {
        setDescription(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // NOTIFICATION THAT VIDEO IS UPLOADED SUCCESFULLY //
        Swal.fire({
            title: "UPLOADED SUCCESFULLY!",
            icon: 'success',
            iconColor: '#0095FF',
            showDenyButton: true,
            confirmButtonText: "HOME",
            confirmButtonColor: "#0095FF",
            denyButtonText: "UPLOAD ANOTHER VIDEO",
            denyButtonColor: "#0095FF",
            allowOutsideClick: false,

          }).then((result) => {
            if (result.isConfirmed) {
                setRedirect(true)
            } else if (result.isDenied) {
                setRedirect(false);
            }
          });

          setTitle('')
          setDescription('')
    }

    const onInvalid = () => {
        setError('form__input--error')
        setFocus('')
     }

    const onFocus = () => {
       setFocus('form__input--active')
    }
 
    const onBlur = () => {
       setFocus('')
       setError('')
    }

    return (
        <>
        {redirect && <Navigate to='/' /> }
        <div className="upload-form__wrapper">
            <form onSubmit={onSubmit} className="upload-form">
                <div className="upload-form__wrapper--input">
                    <label htmlFor="video_title" className="upload-form__label">TITLE YOUR VIDEO</label>
                    <Input 
                        placeholder='Add a title to your video'
                        classname='upload-form__input upload-form__input--title site_input'
                        name='video_title'
                        onchange={titleOnChangeValue}
                        value={title}
                        /> 
                    <label htmlFor="video_description" className="upload-form__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea value={description} onChange={descriptionOnChangeValue} onInvalid={onInvalid} onFocus={onFocus} onBlur={onBlur} className={`upload-form__input upload-form__input--description site_input ${focus} ${error}`} name="video_description" placeholder="Add a description to your video" required></textarea>
                </div>
                <div className="upload-form__wrapper--button">
                    <Button
                    text='PUBLISH'
                    classname='upload-form__button cta_button' />
                    <Button
                    text='CANCEL'
                    classname='upload-form__button--cancel cta_button' />  
                </div>
            </form> 
        </div> 
        </>
    )
   }
   
   export default UploadForm ;