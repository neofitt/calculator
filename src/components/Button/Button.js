import './Button.css';
import React from 'react';

const Button = (props)=>{
	
	return (
		<div className={`button ${props.className}`} onClick={props.onClick}  > 
			{props.value}
		</div>
	)
}

export default Button;