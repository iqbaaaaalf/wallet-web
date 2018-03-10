import React, { Component } from 'react';

export default class TransactionItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return this.props.transactionCollection.map((transaction,index)=>
        <tr key={index}>
          <td>{transaction.date}</td>
          <td>{transaction.recipient}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>,
    );
  }
}