import React, { Component }from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      balance: '',
    };
  }
  render(){
    return(
        <div>
          <h1 className="Name">{this.state.name}</h1>
          <label htmlFor="Balance">Your Balance</label>
          <span className="Balance">
             {this.state.balance}
          </span>
        </div>
    )
  }
}