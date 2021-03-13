import React,  { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [username, setUsername] = useState({username: "Ifahhhh"});

  const usernameChangedHandler = (event) => {
    setUsername({
      username:  event.target.value
    });
  }

  return (
    <div className="App">
      <UserInput changed={usernameChangedHandler} currentName={username.username} ></UserInput>
      <UserOutput userName={username.username} ></UserOutput>
      <UserOutput userName={username.username}  ></UserOutput>
      <UserOutput userName={username.username}  ></UserOutput>
    </div>
  )
}

export default App;
