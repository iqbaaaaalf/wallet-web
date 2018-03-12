import React, { Component } from 'react';

export default class TransactionItemDesktop extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction, index)=>
        <tr key={index}>
          <td>{transaction.date}</td>
          <td>{transaction.from}</td>
          <td>{transaction.to}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>,
    );
  }
}