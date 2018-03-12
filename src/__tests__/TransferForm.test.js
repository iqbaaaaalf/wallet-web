import React from 'react';
import { shallow, mount } from 'enzyme';
import Transferform from '../js/TransferForm';

describe('Transferform', () => {
  describe('handleFrom', () => {
    it('should return Name of owner WalletId', () => {
      const wrapper = shallow(<Transferform />);
      const data = {
        name: 'Budi',
      };
      wrapper.state(data);
      const from = wrapper.find('span');
      expect(from.text()).toEqual('Budi');
    });
  });
  describe('handleAmount', () => {
    it('should return amount of transfer', () => {
      const wrapper = shallow(<Transferform/>);
      const inputAmount = wrapper.find('.amount');
      inputAmount.simulate('change',{
        target:{
          value: '250000',
        },
      });
      expect(wrapper.state('amount')).toEqual('250000');
    });
  });
});
