import React from 'react';
import Led from './Led';

const LedStrip = (props) => {
	let strip = [];
	for (let i = 0; i < props.size; i++) {
		if (props.bit[i] == '1') {
			strip.push(<Led on={true}/>);
		}else {
			strip.push(<Led on={false}/>);
		}
	}

	return(
		<div className='ledstrip'>
			{strip}
		</div>
	)
}

export default LedStrip;