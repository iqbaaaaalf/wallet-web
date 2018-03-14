import React, { Component } from 'react';
import Payeelist from './Payeelist';

export default class Transfer extends Component{
  constructor(props){
    super(props);
    this.state = {
      from : 'Budi',
      to: '',
      amount: '',
      description: '',
      errorAmount: '',
      errorDescription: '',
      payeeList: [],
    };
    this._handleAmount = this._handleAmount.bind(this);
    this._handleDescription = this._handleDescription.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleAmount(event){
    this.setState({
      amount: event.target.value,
    })
  }

  _handleDescription(event){
    this.setState({
      description: event.target.value,
    })
  }

  _handleSubmit(){
    const { from, to, amount, description} = this.state;
    const data = {
      from: from,
      to: to,
      amount: amount,
      description: description,
    };
    if (amount === '') {
      this.setState({
        errorAmount: 'Amount is require',
      });
    }
    if (description === '') {
      this.setState({
        errorDescription: 'Description is require',
      });
    }
    this.props.onSubmit(data);
  }

  render(){
    return(
        <form>
          <div className="card border-primary mb-3 align-content-lg-center">
            <div className="card-header">Transfer</div>
            <div className="card-body text-primary">
              <div className="row">
                <div className="col">
                  <label htmlFor="from">From:</label>
                </div>
                <div className="col-8">
                  <span className="from">Budi</span>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <label htmlFor="To">To:</label>
              </div>
              <div className="col-8">
                <Payeelist payeelisting={this.state.payeeList}/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <label htmlFor="amount">Amount: </label>
              </div>
              <div className="col-8">
                <input type="text" className="amount" onChange={this._handleAmount} />
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <label htmlFor="description">Description :</label>
              </div>
              <div className="col-8">
                <textarea className="description" onChange={this._handleDescription}/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
                <button type="submit" className="submit btn btn-secondary" onClick={this._handleSubmit} > Send </button>
              </div>
            </div>
          </div>
        </form>
    );
  }
}