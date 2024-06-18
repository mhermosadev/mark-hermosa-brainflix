import './Logo.scss';
import siteLogo from '../../assets/logo/BrainFlix-logo.svg'

const Logo = () => {

   return (
      <img className='header__logo site__logo' src={siteLogo} alt='brain flixlogo'/>
   )
    
}

export default Logo
