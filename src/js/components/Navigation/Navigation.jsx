import React, { Component } from 'react';

export default class Navigation extends Component{
  render(){
    return(
        <div className="container col-md-2">
          <div className="card">
            <div className="nav flex-column nav-pills">
              <a className="nav-link active" data-toggle="pill" href="#v-pills-home"  aria-controls="v-pills-home" aria-selected="true">Home</a>
              <a className="nav-link" data-toggle="pill" href="#v-pills-dashboard"  aria-controls="v-pills-dashboard" aria-selected="false">Dashboard</a>
              <a className="nav-link" data-toggle="pill" href="#v-pills-transaction"  aria-controls="v-pills-transaction" aria-selected="false">Transaction</a>
              <a className="nav-link" data-toggle="pill" href="#v-pills-payeelist"  aria-controls="v-pills-payeelist" aria-selected="false">Payee List</a>
              <a className="nav-link" data-toggle="pill" href="#v-pills-transfer"  aria-controls="v-pills-transfer" aria-selected="false">Transfer</a>
            </div>
          </div>
        </div>
    );
  }
}