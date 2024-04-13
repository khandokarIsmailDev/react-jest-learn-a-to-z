import React, { useState } from 'react';

const Button = () => {
    const [data,setData] = useState('')

    return (
        <div className='App'>
            <h1>Test Click Event with button</h1>
            <button onClick={() => setData('updated data')}>Update Data</button>
            <h3>{data}</h3>
        </div>
    );
};

export default Button;