import { mount, shallow} from 'enzyme';
import React from 'react';
import TransactionItemMobile from '../../components/Transaction/TransactionItemMobile';

describe('TransactionItemMobile', () => {
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

      const wrapper = mount(<TransactionItemMobile transactionCollection={transactionData}/>);
      const item = wrapper.find('div').at(0);
      const dateColumn = item.find('text').at(0).text();
      const fromColoumn = item.find('text').at(1).text();
      const toColoumn = item.find('text').at(2).text();
      const descriptionColumn = item.find('text').at(3).text();
      const amountColumn = item.find('text').at(4).text();
      const actualOutput =
          `${dateColumn} ${fromColoumn} ${toColoumn} ${descriptionColumn} ${amountColumn}`;
      const expectedOutput = '12/12/12 iqbal doni debt 600000';
      expect(actualOutput).toBe(expectedOutput);
    });
    it('should display transaction TopUp', () => {
      const transactionData = [
        {
          date: '12/12/12',
          FromWallet: { User: { name: 'iqbal' } },
          ToWallet: null,
          description: 'debt',
          amount: '600000',
        } ];

      const wrapper = mount(<TransactionItemMobile transactionCollection={transactionData}/>);
      const transactionType = wrapper.find('#transactionType').text;
      expect(transactionType).toEqual('Top Up');
    });
  });
});