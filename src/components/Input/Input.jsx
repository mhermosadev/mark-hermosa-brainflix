import './Input.scss';
import { useState } from "react";

const Input = ({classname, placeholder, name, onchange, oninput, value}) => {
   const [focus, setFocus] = useState('');
   const [error, setError] = useState('');

   const onInvalid = () => {
      setError('form__input--error')
      setFocus('')
   }

   const onFocus = () => {
      setFocus('header__input--active')
   }

   const onBlur = () => {
      setFocus('')
      setError('')
   }


 return (
   <input required onInvalid={onInvalid} onChange={onchange} value={value} onFocus={onFocus} onBlur={onBlur} className={`site_input ${classname} ${focus} ${error}`} placeholder={placeholder} type="text" name={name} />
 )
}

export default Input;
