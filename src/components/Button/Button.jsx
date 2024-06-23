import './Button.scss';

const Button = ({classname, text, click, type}) => {
   
    return (
      <button type={type} onClick={click} className={`cta_button ${classname}`}>{text}</button>
   )
    
   }
   
   export default Button;