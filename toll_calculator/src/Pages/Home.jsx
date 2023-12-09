import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateToll } from './Redux/tollAction';

const Home = () => {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');

    const dispatch = useDispatch();

    const tollAmount = useSelector((state) => state.toll.amount);

    const error = useSelector((state) => state.toll.error);

    const handleCalculateToll = () => {
        dispatch(
            calculateToll(startLocation,endLocation)
        )
    };

  return (
    <div>
        <h1>Advance Toll Calculate</h1>
    <div>
        <label htmlFor='startLocation'>Start Location:</label>
        <input 
           type='text'
           id='startLocation'
           value={startLocation}
           onChange={(e) => setStartLocation(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor='endLocation'>End Location:</label>
        <input 
           type='text'
           id='endLocation'
           value={endLocation}
           onChange={(e) => setEndLocation(e.target.value)}
        />
    </div>
    <button onClick={handleCalculateToll}>Calculate Toll</button>

    {error && <div className='error'>{error}</div>}

    {tollAmount !== null && !error && (<div>
        <h2>Toll Amount: ${tollAmount}</h2>
    </div>)} 

    </div>
  );
};

export default Home;
