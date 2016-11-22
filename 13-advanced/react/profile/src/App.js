import React, { Component } from 'react';
import Profile from './Profile.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="Greg" age="37" bio="No gods no masters" pic="http://placekitten.com/100/100"/>
      </div>
    );
  }
}

export default App;
