import React from 'react';
import Blog from './Blog';
import Reviews from './Reviews';
import Trending from './Trending';
import Resources from './Resources';
import './App.css';
import logo from './dice.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <img src={logo} className="logo" alt="logo"/>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Trending</li>
            <li>Resources</li>
            <li><input type="search" className="search-bar" placeholder="Search"/></li>
          </ul>
        </nav>
        <Blog />
        <Reviews />
        <Trending />
        <Resources />
      </header>
    </div>
  );
}

export default App;
