import React, { Component } from 'react';
import Filter from './Filter/Filter';
import FilterAmount from './Filter/FilterAmount';
import FilterQuery from './Filter/FilterQuery';
import Transaction from './Transaction/Transaction';
import UserBalance from './UserBalance';
import UserName from './UserName';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterColumn: null,
      filterMode: null,
      filterValue: null,
      sortColumn: null,
      sortValue: null,
      query: '',
    };
  }

  onUpdateFilterValue(data) {
    this.setState({
      filterValue: data.amount,
      filterColumn: 'amount',
      filterMode: data.filterAmountMethod,
    });
  };

  onSubmitFilterDesc(query) {
    this.setState({
      filterColumn: 'description',
      filterMode: null,
      filterValue: query,
      query: query,
    });
  }

  render() {
    return (
        <div className={'container'}>
          <div className={'card'}>
          <span className={'dashboard-user__title'}>
            <UserName/>
          </span>
            <section className={'dashboard-user__balance'}>
              <label>Your Balance</label>
              <UserBalance/>
            </section>
          </div>
          <FilterQuery onChange={this.onSubmitFilterDesc.bind(this)}  value={this.state.query}/>
          <FilterAmount onClick={this.onUpdateFilterValue.bind(this)} />
          <Transaction walletNumber={1}
                       limitFetching={5}
                       transactionFilterColumn={this.state.filterColumn}
                       transactionFilterMode={this.state.filterMode}
                       transactionFilterValue={this.state.filterValue}
                       transactionSortColumn={this.state.sortColumn}
                       transactionSortValue={this.state.sortValue}
          />
        </div>
    );
  }
}