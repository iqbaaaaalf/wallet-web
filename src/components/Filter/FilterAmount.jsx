import React from 'react';
import PropTypes from 'prop-types';

export default class FilterAmount extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: '',
    };
  }

  _onChangeInput(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  render() {
    const { amount } = this.state;

    return (
        <div>
          <input className="filter-query--amount form-control"
                 onChange={this._onChangeInput.bind(this)}
                 value={amount}
          />
        </div>
    );
  }
}

FilterAmount.propTypes = {
  onChange: PropTypes.func.isRequired,
};