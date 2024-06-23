import './Header.scss';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Header = ({homePageLink}) => {

const [link, setLink] = useState(false)

const onClick = () => {
    setLink(true)
}

    return (
        <>
        {link && <Navigate to='/uploadpage' />}
        <header>
            <Link className='header__link' to={homePageLink}>
                <Logo />
            </Link>
            <div className='header__wrapper--tablet'>
                <div className='header__wrapper'>
                    <Input
                    placeholder='Search'
                    classname='header__input'
                    />
                    <Avatar
                    classname='header__avatar header__avatar--mobile'
                    />
                </div>
                <Button 
                classname='header__button'
                text='UPLOAD'
                click={onClick}
                />
                <Avatar
                classname='header__avatar header__avatar--tablet '
                />
            </div>
        </header>
        </> 
    )
    
}

export default Header;