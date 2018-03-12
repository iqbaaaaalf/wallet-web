import React, { Component }from 'react';
import TransactionDesktop from './TransactionDesktop';
import TransactionMobile from './TransactionMobile';


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
          <TransactionDesktop transactionCollection={[{date:'2018-05-'}]}/>
          <TransactionMobile />
        </div>
    );
  }
}
