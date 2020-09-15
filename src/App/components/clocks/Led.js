import React from 'react';

const Led = (props) => {
	if (props.on == true) {
		return(
			<div className='led-on'>
			</div>
		)
	} else {
		return(
			<div className='led-off'>
			</div>
		)
	}
		
}

export default Led;