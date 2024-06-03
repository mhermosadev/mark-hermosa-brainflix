
const Button = ({classname, text}) => {
   

    return (
       <button className={`cta_button ${classname}`}>{text}</button>
    )
       
   }
   
   export default Button;