import React, { Component }from 'react';
import TransactionDesktop from './TransactionDesktop';


export default class Homepage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
        <div>
          <h1 className="Welcome">Hello,{this.state.name}</h1>
          <TransactionDesktop />
          <TransactionMobile />
        </div>
    );
  }
}
