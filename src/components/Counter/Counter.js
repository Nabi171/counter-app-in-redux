import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increatmentCounter, decrementCounter, resetCounter } from '../Redux/actions/counterAction';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleIncreament = () => {
        dispatch(increatmentCounter());
        // console.log(count);
    };
    const handleDecrement = () => {
        dispatch(decrementCounter());
        // console.log(count);
    };
    const handleReset = () => {
        dispatch(resetCounter());
        // console.log(count);
    };
    return (
        <div className='text-white'>
            <h3 className='text-white text-center  mt-2'>Make Count</h3>
            <h6>Count:{count}</h6>
            <div className='jusify-content-between'>
                <button onClick={handleIncreament} className='btn btn-outline-light'>Increament</button>
                <button onClick={handleDecrement} className='btn btn-outline-light'>Decrement</button>
                <button onClick={handleReset} className='btn btn-outline-light'>Reset</button>
            </div>
        </div>
    );
};

export default Counter;