import React, { Component } from 'react';

export default class Payeelist extends Component {
  render() {
    return (
        <select className="form-control">
          {this.props.payeelisting.map((payee, index) => {
            return <option key={index}>{payee.name}</option>;
          })}
        </select>
    );
  }
}





