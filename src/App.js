import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock
          title="Incremente"
          start={0}
          increment={1}
        />
        <Clock
          title="Decremente"
          start={20}
          increment={-1}
        />
        <Clock
          title="Incremente 5 em 5"
          start={0}
          increment={5}
        />
      </div>
    );
  }
}

export default App;
