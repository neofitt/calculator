import './Switcher.css';
import {useContext} from 'react';
import {ThemeContext} from './../../context';


const Switcher = ()=>{
	const {theme, setTheme} = useContext(ThemeContext);
	
	const handleValue = (e)=>{
		setTheme(`theme${e.target.value}`);
	};

	return (
		<div className='switcher'>

			<label className="switcher__theme" htmlFor="range">theme</label>
			<input 
				className="switcher__input" 
				id="range" 
				type="range" 
				name="theme" 
				value={theme.slice(5)} 
				min="1" 
				max="3" 
				step="1"
				onChange={(e)=>handleValue(e)}
				>
			</input>
			
			<div className="switcher__value">
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
		</div>
	)
}


export default Switcher;