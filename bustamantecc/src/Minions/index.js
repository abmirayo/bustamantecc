import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class ListeningNow extends Component {

  state = {
    musicData: null,
  }

  componentDidMount() {
    this.updateContents();
  }

  updateContents = () => {
    const scrobblingUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=abustamante&api_key=4132c976306c9ccb03bee5babcf9b295&format=json&limit=1';
    fetch(scrobblingUrl)
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((json) => this.setState({ musicData : json.recenttracks.track[0]}))
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  render() {
    return (
      <div className="minion">
        {this.state.musicData && <div className="listening-now">
          <h4>{this.state.musicData.name}</h4>
          <h5>{this.state.musicData.artist["#text"]}</h5>
          <img src={this.state.musicData.image[1]["#text"]}/>
        </div>}
      </div>
    );
  }
}

const Navigation = () => (
  <nav className="navigation">
    <Link to="blog">Blog</Link>
    <Link to="work">Work</Link>
    <Link to="fun">Fun</Link>
  </nav>
)

module.exports = {
  ListeningNow,
  Navigation
}
