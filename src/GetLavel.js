import React from 'react';

const GetLavel = () => {
    return (
        <div className='App'>
            <h1>checkbox testing with get by label</h1>

            <label htmlFor='user-name'>User Name</label>
            <input type='text' id='user-name' defaultValue="ismail" /> <br/><br/>

            <label htmlFor='skills'>User Skills</label>
            <input type='checkbox' id='skills' defaultChecked={true} /> 
        </div>
    );
};

export default GetLavel;