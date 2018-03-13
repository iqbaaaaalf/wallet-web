import { shallow, mount } from 'enzyme';
import React from 'react';
import Navigation from '../../js/components/Navigation/Navigation';

describe('Navigation', () => {
  describe('navigationGroup', () => {
    it('return correct value of navigation', () => {
      const data = {
        Home : 'Home',
        Dashboard: 'Dashboard',
        Transaction: 'Transaction',
        PayeeList : 'Payee List',
        Transfer : 'Transfer',
      };
      const wrapper = shallow(<Navigation/>);
      wrapper.state(data);
      const Home = wrapper.find('a').at(0);
      const Dashboard = wrapper.find('a').at(1);
//      const Transaction = wrapper.find('a').at(2);
//      const PayeeList = wrapper.find('a').at(3);
//      const Transfer = wrapper.find('a').at(4);
      expect(Home.text()).toEqual('Home');
      expect(Dashboard.text()).toEqual('Dashboard');
//      expect(Transaction.text()).toEqual('Transaction');
//      expect(PayeeList.text()).toEqual('Payee List');
//      expect(Transfer.text()).toEqual('Transfer');
    });
  });
});
