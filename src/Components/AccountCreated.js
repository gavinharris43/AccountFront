import React, { Component } from 'react';
import Win from './Win.js';
import Lose from './Lose.js';

import { Button } from 'react-bootstrap';

class AccountCreated extends Component {

  constructor(props){
    super(props);
    this.state = {
      accNum: this.props.accNum,
      prize: this.props.prizeWon,
      windowState: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    if(this.state.prize !== 0){
      this.setState({
        windowState: 1
      });
    }else{
      this.setState({
        windowState:2
      });
    }
  }


  render() {

    const Main = () =>{
      return(
        <div>
          <h1>Account Successfully Created</h1>
          <br/><br/>
          <p>Account No: {this.state.accNum}</p><br/>
          <Button bsStyle="primary" onClick={this.handleClick}>Enter prize draw</Button>
        </div>
      );
    }


    return (
      <div>
        {this.state.windowState===0 && <Main/>}
        {this.state.windowState===1 && <Win prize={this.state.prize}/>}
        {this.state.windowState===2 && <Lose/>}
      </div>
    );
  }
}

export default AccountCreated;
