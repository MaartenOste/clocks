import React, { useEffect, useState} from 'react';


const DigitalClock =() => {
	const [time, setTime] = useState(new Date().getTime());
	const [readebleTime, setReadebleTime] = useState(null);

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

		const toBits = (input, n) => {
			input = String(input);
			while (input.length <n ){
				input = `0${input}`;
			}
			return input;
		}

		setReadebleTime(convertTimeToReadebleString(time))
		
		const timerId = setInterval(() => {
			getTime();
		}, 500);
		return () => clearInterval(timerId);
	}, [time]);

	return(
		<div className='app'>
			<div className='title'>
				DigitalClock
			</div>
			<div className='clock'>
				{!!readebleTime? <p>{readebleTime}</p> : <p>de tijd staat stil</p>}
			</div>
		</div>
	);
};

export default DigitalClock;