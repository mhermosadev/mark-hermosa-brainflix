import './Input.scss';
import { useState } from "react";

const Input = ({classname, placeholder, name, onchange, value}) => {
   const [focus, setFocus] = useState('');

   const onFocus = () => {
      setFocus('header__input--active')
   }

   const onBlur = () => {
      setFocus('')
   }


 return (
   <input required onChange={onchange} value={value} onFocus={onFocus} onBlur={onBlur} className={`site_input ${classname} ${focus}`} placeholder={placeholder} type="text" name={name} />
 )
}

export default Input;
