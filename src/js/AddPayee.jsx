import React, { Component } from 'react';

export default class AddPayee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPayee: '',
      errorInvalid: ''
    };
    this._handleInputPayee = this._handleInputPayee.bind(this);
    this._handleInputOnSubmit = this._handleInputOnSubmit.bind(this);
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
            </div>
          </div>
        </section>
    );
  }
}