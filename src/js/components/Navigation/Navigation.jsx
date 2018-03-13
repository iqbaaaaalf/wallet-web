import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component{
  render(){
    return(
        <nav className="container col-md-2">
          <div className="card">
            <div className="nav flex-column nav-pills">
              <Link to={'/'}><a className="nav-link active" data-toggle="pill" href="#v-pills-home"  aria-controls="v-pills-home" aria-selected="true">Home</a></Link>
              <Link to={'/dashboard'}><a className="nav-link" data-toggle="pill" href="#v-pills-dashboard"  aria-controls="v-pills-dashboard" aria-selected="false">Dashboard</a></Link>
              {/*<Link to={'/transaction'}><a className="nav-link" data-toggle="pill" href="#v-pills-transaction"  aria-controls="v-pills-transaction" aria-selected="false">Transaction</a></Link>*/}
              {/*<Link to={'/payee'}><a className="nav-link" data-toggle="pill" href="#v-pills-payeelist"  aria-controls="v-pills-payeelist" aria-selected="false">Payee List</a></Link>*/}
              {/*<Link to={'/transfer'}><a className="nav-link" data-toggle="pill" href="#v-pills-transfer"  aria-controls="v-pills-transfer" aria-selected="false">Transfer</a></Link>*/}
            </div>
          </div>
        </nav>
    );
  }
}