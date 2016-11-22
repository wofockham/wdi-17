import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super(); // Call the constructor for the parent class/ancestory which we inherited from.
    this.state = {clicks: 0};
  }

  _incremementClicks () {
    //this.state.clicks += 1; // Mutation: won't work.
    this.setState({clicks: this.state.clicks + 1}); // Update the state in a way that React will notice.
  }

  render() {
    return (<p onClick={this._incremementClicks.bind(this)}>You clicked { this.state.clicks } times</p>);
  }
}

export default Clickr;
