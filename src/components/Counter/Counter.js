import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount((count) => count + 1);
        console.log(count);
    };
    return (
        <div className='text-white'>
            <h3 className='text-white text-center  mt-2'>Make Count</h3>
            <h6>Count:{count}</h6>
            <button onClick={handleIncreament} className='btn btn-outline-light'>Increament</button>
        </div>
    );
};

export default Counter;