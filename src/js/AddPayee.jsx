import React, { Component } from 'react';

export default class AddPayee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPayee: '',
      errorInvalid: '',
      username: 'iqbal',
    };
    this._handleInputPayee = this._handleInputPayee.bind(this);
    this._handleInputOnSubmit = this._handleInputOnSubmit.bind(this);
    this._handleInputOnPayee = this._handleInputOnPayee.bind(this);
  }

  _handleInputPayee(event) {
    this.setState({
      addPayee: event.target.value,
    });
  }

  _handleInputOnSubmit() {
    const { addPayee} = this.state;
    const data = {
      addPayee: addPayee,
    };

    if (addPayee === '') {
      this.setState({
        errorInvalid: 'Invalid Wallet Id',
      });
    }
    this.props.onSubmit(data);
  }
  _handleInputOnPayee() {
  };


  render() {
    const { addPayee } = this.state;
    return (
        <section>
          <div className="card border-primary mb-3 col-4 align-content-lg-center">
            <div className="card-header">Add Payee</div>
            <div className="card-body text-primary">
              <input type="text" className="addPayee" onChange={this._handleInputPayee}
                     value={addPayee} />
              <button type="submit" className="submit btn-primary"
                      onClick={this._handleInputOnSubmit}> search
              </button>
              <p className="payee">{this.state.username}</p>
              <button type="submit" className="payeeExist" onClick={this._handleInputOnPayee}>Add</button>
            </div>
          </div>
        </section>
    );
  }
}