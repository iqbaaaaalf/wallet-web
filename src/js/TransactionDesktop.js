import React, { Component } from 'react';
import TransactionItemDesktop from './TransactionItemDesktop';

export default class TransactionDesktop extends Component{

  render(){
    return(
        <table className={'table table-bordered'}>
          <thead>
          <tr>
            <th>date</th>
            <th>from</th>
            <th>To</th>
            <th>description</th>
            <th>amount</th>
          </tr>
          </thead>
          <tbody>
          <TransactionItemDesktop transactionCollection={this.props.transactionCollection}/>
          </tbody>
        </table>
    );
  }
}
