import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { useState } from "react";
import axios from 'axios';  
import './Form.scss';

const Form = ({id, setComment, setCounter}) => {

    const [focus, setFocus] = useState('');
    const [newComment, setNewcomment] = useState('');
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

    const inputChangeValue = (event) => {
        setNewcomment(event.target.value)
    }

    const submitComment = async (e) => {
        e.preventDefault()
        const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
        const apiURL = 'http://localhost:8000';
        const newPost = {
            name: 'Mark Hermosa',
            comment: newComment
            };
        try {
            const postResponse = await axios.post(`${apiURL}/videos/${id}/comments${apiKEY}`, newPost);
            setComment(postResponse.data.sort((a, b) => b.timestamp - a.timestamp));
            setNewcomment('');
            setCounter(postResponse.data.length)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="form">
            <div className="form__wrapper">
                <Avatar 
                classname='form__avatar'/>
                <form onSubmit={submitComment}>
                    <label htmlFor="userInput" className="form__label">JOIN THE CONVERSATION</label>
                    <div className="form__wrapper--tablet">
                        <textarea required onInvalid={onInvalid} value={newComment} onChange={inputChangeValue} onFocus={onFocus} onBlur={onBlur} className={`form__input form__input--mobile ${focus} ${error}`} name="userInput" placeholder="Add a new comment"></textarea>
                        <Input 
                        placeholder='Add a new comment'
                        classname='form__input form__input--tablet'
                        name='userInput'
                        onchange={inputChangeValue}
                        value={newComment}
                        /> 
                        <Button
                        text='COMMENT'  
                        classname='form__button' 
                        type='submit'
                        />
                    </div>  
                </form> 
            </div> 
        </div>
        </>
    )

   }
   
   export default Form ;