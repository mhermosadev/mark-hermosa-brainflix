import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const Form = () => {

    
    return (
        <>
        <div class="form__wrapper">
            <Avatar 
            classname='comment__avatar'/>
            <form className="comment__form">
                <label for="userInput" className="comment__label">JOIN THE CONVERSATION</label>
                <textarea className="comment__input comment__input--mobile"  name="user-comment" placeholder="Add a new comment" required></textarea>
                <Input 
                placeholder='Add a new comment'
                classname='comment__input comment__input--tablet'
                
                /> 
                <Button
                text='COMMENT'
                classname='comment__button' />
            </form> 
        </div> 
        </>
    )
   }
   
   export default Form ;