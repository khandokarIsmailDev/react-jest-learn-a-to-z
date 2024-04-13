import React, { useState } from 'react';
import handleOtherFunc from './helper';

const Func = () => {

    const [data,setData] = useState('')

    function handleData(){
        setData('hello')
    }

    

    return (
        <div className='App'>
            <h2>functional component method test</h2>
            <button data-testid='btn1' onClick={handleData}>Update</button><br/>
            <button onClick={handleOtherFunc}>click to say hi</button>
            <h3>{data}</h3><br/><br/>
        </div>
    );
};

export default Func;