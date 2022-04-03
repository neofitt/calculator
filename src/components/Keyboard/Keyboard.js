import './Keyboard.css';

import Button from './../Button/Button';
import {useContext} from 'react';
import {ScreenContext} from './../../context';

const Keyboard = ()=>{
	const {data, setData} = useContext(ScreenContext);
	
	let res={...data};

	const reset = ()=>{
		res.result = '0';
		res.arg='0';
		res.sign = '+';
		res.showRes = true;
		res.roundDepth=0;

		setData(res);

	};

	const calculate = ()=>{
		let result; 

		if (res.sign === '+'){
			result = (parseFloat(res.arg) + parseFloat(res.result)).toString();
		}
		else if (res.sign === '-'){
			result = (parseFloat(res.result) - parseFloat(res.arg)).toString();
		}
		else if (res.sign === '*'){
			result = (parseFloat(res.arg) * parseFloat(res.result)).toString();
		}
		else if (res.sign === '/'){
			if(res.arg === '0'){
				result = '0';
			}else{
				console.log('inside devide');
				result = (parseFloat(res.result) / parseFloat(res.arg)).toString();
			}
		};

		if (result.split('.')[1] !== undefined && result.split('.')[1].length > 6){
			result = (parseFloat(result).toFixed(6)).toString();
		}
		return result;		
		}
	
	
	const action = (sign)=>{
		switch(sign){
			case('add'):
				res.result = calculate();
				res.showRes=true;
				res.arg = '0';
				res.sign = '+';
				setData(res);
				break;
			case('substract'):
				res.result = calculate();
				res.showRes=true;
				res.arg = '0';
				res.sign = '-';
				setData(res);
				break;

			case('divide'):
				res.result = calculate();
				res.showRes=true;
				res.arg = '0';
				res.sign = '/';
				setData(res);
				break;

			case('multiply'):
				res.result = calculate();
				res.showRes=true;
				res.arg = '0';
				res.sign = '*';
				setData(res);
				break;
			default: 
				console.log('bmw');
		};
	}

	const equal = ()=>{
		res.result = calculate();
		res.arg = '0';
		res.sign = '+';
		res.showRes = true;
		setData(res);
	};

	const del = ()=>{
		if(res.showRes){ //result
			if(res.result.length===1){
				res.result = '0';
				setData(res);
			} else{
				if(res.result[-1]==='.'){
					res.result = res.result.slice(0, -2);
					setData(res);
					return
				}
				res.result = res.result.slice(0, -1);
				setData(res);
			}
		}else{ //arg
			if(res.arg.length===1){
				res.arg = '0';
				setData(res);
			} else{
				if(res.result[-1]==='.'){
					res.result = res.arg.slice(0, -2);
					setData(res);
					return
				}
				res.arg = res.arg.slice(0, -1);
				setData(res);
			}
		}
	}

	const handleClick = async (value)=>{

		const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

		res.showRes = false;

		switch(true){
			case(value in numbers):
				
				if (data.arg === '0'){
					res.arg=value;
					setData(res);
					break;
				}
				else{
					res.arg+=value;
					setData(res);
					break;
				}
			
			case(value==='.'):
				if(res.arg.includes('.')){
					break;
				}
				res.arg+=value;
				setData(res);
				break;

			default:
				break;
		}
	}
	
	return (
		<div className='keyboard' >
			<Button value='7' onClick={()=>handleClick('7')}/>
			<Button value='8' onClick={()=>handleClick('8')}/>
			<Button value='9' onClick={()=>handleClick('9')}/>
			<Button value='DEL' className='button--del size--sm' onClick={del}/>
			<Button value='4' onClick={()=>handleClick('4')}/>
			<Button value='5' onClick={()=>handleClick('5')}/>
			<Button value='6' onClick={()=>handleClick('6')}/>
			<Button value='+' onClick={()=>action('add')}/>
			<Button value='1' onClick={()=>handleClick('1')}/>
			<Button value='2' onClick={()=>handleClick('2')}/>
			<Button value='3' onClick={()=>handleClick('3')}/>
			<Button value='-' onClick={()=>action('substract')}/>
			<Button value='.' onClick={()=>handleClick('.')}/>
			<Button value='0' onClick={()=>handleClick('0')}/>
			<Button value='/' onClick={()=>action('divide')}/>
			<Button value='X' className='button--multiply' onClick={()=>action('multiply')}/>
			<Button value='RESET' className='button--reset size--sm' onClick={reset}/>
			<Button value='=' className='button--equal size--sm' onClick={equal}/>
		</div>
	)
}


export default Keyboard;