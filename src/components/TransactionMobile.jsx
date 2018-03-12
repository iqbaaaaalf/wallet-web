import React, { Component } from 'react';
import TransactionItemMobile from './TransactionItemMobile';

export default class TransactionMobile extends Component{

  render(){
    return(
        <div className="Container">
          <TransactionItemMobile transactionCollection={this.props.transactionCollection}/>
        </div>
    );
  }
}