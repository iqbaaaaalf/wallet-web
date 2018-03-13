import React, { Component } from 'react';
import Transaction from './Transaction/Transaction';
import UserBalance from './UserBalance';
import UserName from './UserName';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
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
          <Transaction walletNumber={1} limitFetching={5}/>
        </div>
    );
  }
}