import React from 'react';
import { mount } from 'enzyme';
import RecentTransactionTable from '../js/RecentTransactionTable';

describe('RecentTransactionTable', () => {
  describe('#showData', () => {
    it('should show data of recent transaction', () => {
      const transactionData = [{
        date: '12/12/12',
        recipient:'iqbal',
        description: 'paying debt',
        amount: '600000'
      }];
      const wrapper = mount(<RecentTransactionTable transactionList={transactionData}/>)
      expect(wrapper.props().transactionCollection).toEqual(transactionData);
    });

  });
});