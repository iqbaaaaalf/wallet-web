import { mount } from 'enzyme';
import React from 'react';
import TransactionItemDesktop from '../../components/Transaction/TransactionItemDesktop';

describe('TransactionItemDesktop', () => {
  describe('#ShowItemData', () => {
    it('should display transaction item', () => {
      const transactionData = [
        {
          date: '12/12/12',
          FromWallet: { User: { name: 'iqbal' } },
          ToWallet: { User: { name: 'doni' } },
          description: 'debt',
          amount: '600000',
        } ];
      const wrapper = mount(<TransactionItemDesktop transactionCollection={transactionData}/>);
      const item = wrapper.find('tr').at(0);
      const dateColumn = item.find('td').at(0).text();
      const fromColoumn = item.find('td').at(1).text();
      const toColoumn = item.find('td').at(2).text();
      const descriptionColumn = item.find('td').at(3).text();
      const amountColumn = item.find('td').at(4).text();
      const actualOutput =
          `${dateColumn} ${fromColoumn} ${toColoumn} ${descriptionColumn} ${amountColumn}`;
      const expectedOutput = 'Wednesday, 12/12/2012, 12:00:00 am iqbal doni debt 600000';
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});