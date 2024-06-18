import './Button.scss';

const Button = ({classname, text, click}) => {
   

    return (
       <button type="button" onClick={click} className={`cta_button ${classname}`}>{text}</button>
    )
   }
   
   export default Button;