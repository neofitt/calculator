import './Screen.css';

import {useContext} from 'react';
import {ScreenContext} from './../../context';

const Screen = ()=>{
	const {data} = useContext(ScreenContext);

	const trimLength = (num)=>{
		let res;
		if (num.length>=12){
			res = num.slice(0, 12);
		} else {
			res = num;
		}
		return res;

	}

	return (
		<div className='screen'>
			<div className='screen__value'>{data.showRes ? trimLength(data.result) : trimLength(data.arg)} </div>
		</div>
	)
}


export default Screen;