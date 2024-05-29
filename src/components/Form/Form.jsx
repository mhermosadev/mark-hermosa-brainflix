import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { useState } from "react";

const Form = () => {

    const [focus, setFocus] = useState('');

    const onFocus = () => {
       setFocus('form__input--active')
    }
 
    const onBlur = () => {
       setFocus('')
    }

    
    return (
        <>
        <div className="form">
            <div class="form__wrapper">
                <Avatar 
                classname='form__avatar'/>
                <form>
                    <label for="userInput" className="form__label">JOIN THE CONVERSATION</label>
                    <div className="form__wrapper--tablet">
                        <textarea onFocus={onFocus} onBlur={onBlur} className={`form__input form__input--mobile ${focus}`} name="user-comment" placeholder="Add a new comment" required></textarea>
                        <Input 
                        placeholder='Add a new comment'
                        classname='form__input form__input--tablet'
                        
                        /> 
                        <Button
                        text='COMMENT'
                        classname='form__button' />
                    </div>
                  
                    
                </form> 
            </div> 
        </div>
       
        </>
    )
   }
   
   export default Form ;