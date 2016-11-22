import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 100};
  }

  _zoomIn() {
    this.setState({height: this.state.height + 10});
  }

  _zoomOut() {
    this.setState({height: this.state.height - 10});
  }

  render() {
    const {name, age, bio, pic} = this.props; // Destructuring to put object properties into simple variables.
    return (
      <div className="profile">
        <h1>{name}</h1>
        <h2>Age: {age}</h2>
        <p>Bio: {bio}</p>
        <img src={pic} height={this.state.height} alt={name}/>
        <hr/>
        <button onClick={this._zoomIn.bind(this)}>Zoom in</button>
        <button onClick={this._zoomOut.bind(this)}>Zoom out</button>
      </div>
    );
  }
};

export default Profile;
