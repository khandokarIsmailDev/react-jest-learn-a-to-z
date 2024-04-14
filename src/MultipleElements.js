import React from 'react';

const MultipleElements = () => {
    return (
        <div>
            <h1>Multiple elements and Custom Role</h1>
            <button>button 1</button>
            <button>button 2</button>
            <br/>
            <label htmlFor='input1'>User Name</label>
            <input type='text' id='input1'/>
            <br/>
            <label htmlFor='input2' >User Email</label>
            <input type='text' id='input2' />

            <br/>

            <div role='dummy'>
                dummy text
            </div>
        </div>
    );
};

export default MultipleElements;