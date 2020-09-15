import React, { useEffect, useState} from 'react';
import LedStrip from './LedStrip';
import './BinaryClock.css';

const BinaryClock =() => {
	const [time, setTime] = useState(new Date().getTime());
	const [readebleTime, setReadebleTime] = useState('00:00:00');

	useEffect(() => {
		async function getTime() {
			setTime(new Date().getTime())
		}

		const convertTimeToReadebleString = (t) => {
			const date = new Date;
			const h = date.getHours();
			const m = date.getMinutes();
			const s = date.getSeconds();
			return `${toBits(h,2)}:${toBits(m,2)}:${toBits(s,2)}`
		}

		setReadebleTime(convertTimeToReadebleString(time))
		
		const timerId = setInterval(() => {
			getTime();
		}, 500);
		return () => clearInterval(timerId);
	}, [time]);

	const toBits = (input, n) => {
		input = String(input);
		while (input.length <n ){
			input = `0${input}`;
		}
		return input;
	}

	function dec2bin(dec){
		return toBits((dec >>> 0).toString(2), 4);
	}

	function reverseString(str) {
		return str.split("").reverse().join("");
	}

	return(
		<div>
			BinaryClock
			<div className='binary-clock'>
				<LedStrip size={2} bit={reverseString(dec2bin(readebleTime.split(':')[0][0]))}/>
				<LedStrip size={4} bit={reverseString(dec2bin(readebleTime.split(':')[0][1]))}/>

				<LedStrip size={3} bit={reverseString(dec2bin(readebleTime.split(':')[1][0]))}/>
				<LedStrip size={4} bit={reverseString(dec2bin(readebleTime.split(':')[1][1]))}/>

				<LedStrip size={3} bit={reverseString(dec2bin(readebleTime.split(':')[2][0]))}/>
				<LedStrip size={4} bit={reverseString(dec2bin(readebleTime.split(':')[2][1]))}/>
			</div>
		</div>
	);
};

export default BinaryClock;