import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    isLoggedIn
} from './redux/reducers/user';

import Login from './components/Login';
import './App.css';

function App() {
  const loggedIn = useSelector(isLoggedIn);
  console.log(loggedIn);

  return (
    <div className="App">
      <header className="App-header">
        Anime North Panelist Registration
      </header>
      {loggedIn ? <div>Logged in!</div> : <Login />}
    </div>
  );
}

export default App;
