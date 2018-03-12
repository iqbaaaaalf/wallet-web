import React from 'react';
import { mount } from 'enzyme';
import TransactionDesktop from '../components/TransactionDesktop';

describe('TransactionDesktop', () => {
  describe('#showData', () => {
    it('should show data of recent transaction', () => {
      const transactionData = [{
        date: '12/12/12',
        from:'iqbal',
        to : 'doni',
        description: 'paying debt',
        amount: '600000'
      }];
      const wrapper = mount(<TransactionDesktop transactionCollection={transactionData}/>)
      expect(wrapper.props().transactionCollection).toEqual(transactionData);
    });
  });
});