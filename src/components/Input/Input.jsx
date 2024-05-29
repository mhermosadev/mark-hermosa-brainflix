import { useState } from "react";

const Input = ({classname, placeholder, id}) => {
   const [focus, setFocus] = useState('');

   const onFocus = () => {
      setFocus('header__input--active')
   }

   const onBlur = () => {
      setFocus('')
   }


 return (
   <input onFocus={onFocus} onBlur={onBlur} className={`site_input ${classname} ${focus}`} placeholder={placeholder} type="text" name="user-name" id={id}/>
 )
}

export default Input;
