import React, {useState} from 'react';
import {DigitalClock, DigitalClockExtended, BinaryClock, ManualClock} from './components'
import './App.css';

const App = () => {
  const [message, setMessage] = useState('Hello Earthlings');
  const [number, setNumber] = useState(0);

  const manipulateState = (ev) => {
    setNumber(number +1);
    setMessage(`Hello Earthlings: ${number}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DigitalClock />
        <DigitalClockExtended />
        <BinaryClock />
        <ManualClock />
      </header>
    </div>
  );
}

export default App;
