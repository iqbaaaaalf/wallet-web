import React, { Component } from 'react';

export default class TopUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      errorInvalid: '',
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
        <div>
          <label htmlFor="wallet">Wallet : </label>
          <p>{this.props.Wallet}</p>
          <label htmlFor="amount">Amount: </label>
          <input type="text" className="amountTopUp" onChange={this._handleAmountTopUp} placeholder="ex:50000" value={amount}/>
          <button type="submit" className="submit" onClick={this._handleSubmit}>Top Up</button>
        </div>
    );
  }
}