import logo from './logo.svg';
import './App.css';
import Logo from './logo.svg'
import { useState } from 'react';
import Button from './Button';
import Users from './Users';
import Func from './Func';

function App() {

  

  return (
    <div className="App">
      <p>Learn React</p>
      <h1>This is Heading Tag1u</h1>
      <input type='text' placeholder='Enter User Name' name='username' id='userId' /><br/><br/>
      <img
        title='this is react oficial logo'
        src={Logo}
        className="img-fluid rounded-top App-logo"
        alt=""
      />
      <h2>I Am ISMAIL</h2><br/>

      <Button/>

      <Users/>

      <Func/>

    </div>
  );
}

export default App;
