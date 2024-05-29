const Input = ({classname, placeholder, id}) => {

 return (
    <input className={`site_input ${classname}`} placeholder={placeholder} type="text" name="user-name" id={id}/>
 )
}

export default Input;
