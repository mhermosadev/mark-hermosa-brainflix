import { useState } from "react";

const Input = ({classname, placeholder, name}) => {
   const [focus, setFocus] = useState('');

   const onFocus = () => {
      setFocus('header__input--active')
   }

   const onBlur = () => {
      setFocus('')
   }


 return (
   <input onFocus={onFocus} onBlur={onBlur} className={`site_input ${classname} ${focus}`} placeholder={placeholder} type="text" name={name} />
 )
}

export default Input;
