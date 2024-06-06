import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
        <header>
            <Link className='header__link' to='/'>
                <Logo />
            </Link>
            <div className='header__wrapper--tablet'>
                <div className='header__wrapper'>
                    <Input
                    placeholder='Search'
                    classname='header__input'/>
                    <Avatar
                    classname='header__avatar header__avatar--mobile'/>
                </div>
                <Link className='header__link' to='uploadpage'>
                    <Button 
                    classname='header__button'
                    text='UPLOAD'/>
                </Link>
               
                <Avatar
                    classname='header__avatar header__avatar--tablet '/>
            </div>
        </header>
        </> 
    )
}

export default Header;