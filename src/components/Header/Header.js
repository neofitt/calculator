import Logo from './../Logo/Logo';
import Switcher from './../Switcher/Switcher';

import './Header.css';

const Header = ()=>{
	return (
		<div className='header'>
			<Logo />
			<Switcher />
		</div>
	)
}

export default Header;