import React, { Component } from 'react';

class Win extends Component {

  render() {
    return (
      <div className = "Win">
        <div className = 'winText'>
        <h1>Congratulations you have won:</h1>
        <br/><br/>
        <h1>£{this.props.prize}</h1>
        </div>
      </div>
    );
  }
}

export default Win;
