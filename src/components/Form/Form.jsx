import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { useState } from "react";
import axios from 'axios';  
import './Form.scss';


const Form = ({id, setnewCommentArr}) => {

    const [focus, setFocus] = useState('');
    const [newComment, setNewcomment] = useState('')

    const onFocus = () => {
        setFocus('form__input--active')
    }
 
    const onBlur = () => {
        setFocus('')
    }

    const inputChangeValue = (event) => {
        setNewcomment(event.target.value)
    }

    console.log(newComment)

    const submitComment = async (e) => {
        e.preventDefault()
        
        const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
        const apiURL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';

        const newPost = {
            name: 'Mark Hermosa',
            comment: newComment
            };

        try {
            const postResponse = await axios.post(`${apiURL}/videos/${id}/comments${apiKEY}`, newPost);
            console.log(postResponse.data)

            setnewCommentArr(postResponse.data)
            setNewcomment('')
            console.log('hello')

        } catch (error) {
    
        }

        
       
    }

    return (
        <>
        <div className="form">
            <div className="form__wrapper">
                <Avatar 
                classname='form__avatar'/>
                <form>
                    <label htmlFor="userInput" className="form__label">JOIN THE CONVERSATION</label>
                    <div className="form__wrapper--tablet">
                        <textarea value={newComment} onChange={inputChangeValue} onFocus={onFocus} onBlur={onBlur} className={`form__input form__input--mobile ${focus}`} name="userInput" placeholder="Add a new comment" required></textarea>
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
                        click={submitComment}
                        />
                    </div>  
                </form> 
            </div> 
        </div>
       
        </>
    )
   }
   
   export default Form ;

