import React, { Component }from 'react';
import RecentTransactionTable from './RecentTransactionTable';


export default class Homepage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleTransactionList() {

  }

  render() {
    return (
        <div>
          <h1 className="Welcome">Hello,{this.state.name}</h1>
          <RecentTransactionTable transactionList={}/>
        </div>
    );
  }
}
