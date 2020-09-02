import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="50px"/>
        Header
      </header>
    </div>
  );
}

export default Header;
