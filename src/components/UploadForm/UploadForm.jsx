import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

const UploadForm = () => {

    const [focus, setFocus] = useState('');
    const [error, setError] = useState('');

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
        <div className="upload-form__wrapper">
            <form className="upload-form">
                <div className="upload-form__wrapper--input">
                    <label for="video_title" className="upload-form__label">TITLE YOUR VIDEO</label>
                    <Input 
                        placeholder='Add a title to your video'
                        classname='upload-form__input upload-form__input--title site_input'
                        name='video_title'
                        /> 
                    <label for="video_description" className="upload-form__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea onInvalid={onInvalid} onFocus={onFocus} onBlur={onBlur} className={`upload-form__input upload-form__input--description site_input ${focus} ${error}`} name="video_description" placeholder="Add a description to your video" required></textarea>
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