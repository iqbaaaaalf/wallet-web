import React, { Component } from 'react';

export default class TopUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      errorInvalid: '',
      balance : '15000',
    };
    this._handleAmountTopUp = this._handleAmountTopUp.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleAmountTopUp(event){
    this.setState({
      amount: event.target.value,
    });
  }

  _handleSubmit(){
    const { amount } = this.state;
    const data = {
      amount: amount,
    };

    if ( amount === ''){
      this.setState({
        errorInvalid: 'Invalid amount'
      });
    }
    this.props.onSubmit(data);
  }

  render(){
    const { amount } = this.state;
    return(
        <div className="card border-primary mb-3 col-4 align-content-lg-center">
          <div className="card-header">Top Up Wallet</div>
          <div className="card-body text-primary">
            <div className="row">
              <div className="col">
                <label htmlFor="wallet">Wallet : </label>
              </div>
              <div className="col-9">
                <p className="Wallet">{this.state.balance}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="amount">Amount: </label>
              </div>
              <div className="col-9">
                <input type="text" className="amountTopUp" onChange={this._handleAmountTopUp} placeholder="ex:50000" value={amount}/>
              </div>
            </div>
            <button type="submit" className="submit" onClick={this._handleSubmit}>Top Up</button>
          </div>
        </div>
    );
  }
}