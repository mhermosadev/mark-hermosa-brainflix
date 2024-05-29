import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';


const Header = () => {

    return (
        <>
        <header>
            <Logo />
            <div className='header__wrapper--tablet'>
                <div className='header__wrapper'>
                    <Input
                    classname='header__input'/>
                    <Avatar
                    classname='user__avatar header__avatar header__avatar--mobile'/>
                </div>
                <Button 
                classname='header__button'
                text='UPLOAD'/>
                <Avatar
                    classname='user__avatar header__avatar header__avatar--tablet '/>
            </div>
        </header>
        </> 
    )
}

export default Header;