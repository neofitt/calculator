import './Container.css';

import Screen from './../Screen/Screen';
import Keyboard from './../Keyboard/Keyboard';
import Header from './../Header/Header';

const Container = ()=>{
	return (
		<div className='container'>
			<Header />

			<Screen value={399} />
			
			<Keyboard />

		</div>
	)
}


export default Container;