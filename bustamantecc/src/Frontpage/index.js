import React, { Component } from 'react';
import { ListeningNow, Navigation } from '../Minions'

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="bustamante-logo">
          bustamante.cc
        </h1>
        <div className="anim-delay-1">
          <p>Hey stranger.</p>
          <p>I'm working on this page, so come back soon!</p>
          <p>In the meantime, this is what I'm listening to right now on Spotify:</p>
          <ListeningNow/>
        </div>
      </div>
    );
  }
}

export default App;
