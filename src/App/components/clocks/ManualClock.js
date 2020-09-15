import React, { useEffect, useState} from 'react';
import './ManualClock.css';
import Wijzer from './Wijzer'

const ManualClock =() => {
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

		const toBits = (input, n) => {
			input = String(input);
			while (input.length <n ){
				input = `0${input}`;
			}
			return input;
		}

		const setManualClock = () => {
			let angleSeconds = ((parseInt(readebleTime.split(':')[2])-14)*360)/60;
			let angleMinutes = ((parseInt(readebleTime.split(':')[1])-15)*360)/60;
			let angleHoures = ((parseInt(readebleTime.split(':')[0])-3)*360)/12;

			document.getElementsByClassName('secondenWijzer')[0].style.transform = 'rotate('+ angleSeconds +'deg)';
			document.getElementsByClassName('langeWijzer')[0].style.transform = 'rotate('+ angleMinutes +'deg)';
			document.getElementsByClassName('korteWijzer')[0].style.transform = 'rotate('+ angleHoures +'deg)';
		}

		setReadebleTime(convertTimeToReadebleString(time))
		
		const timerId = setInterval(() => {
			getTime();
			setManualClock();
		}, 500);
		return () => clearInterval(timerId);
	}, [time]);

	return(
		<div>
			<div className='title'>
				ManualClock
			</div>
			<div className='digital-clock-extended'>
				<div className='schijf'>
					<Wijzer size = {"korteWijzer"} angle = {20}/>
					<Wijzer size = {"langeWijzer"} angle = {30}/>
					<Wijzer size = {"secondenWijzer"} angle = {40}/>
					<div className="centerCircle">
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManualClock;