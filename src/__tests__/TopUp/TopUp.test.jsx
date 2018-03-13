import React from 'react';
import { shallow } from 'enzyme';
import TopUpWallet from '../../js/components/TopUp/TopUp';

describe('TopUpWallet', () => {
  describe('handleAmountTopUp', () => {
    it('Should return correct amount when user input top up', () => {
      const wrapper = shallow(<TopUpWallet />);
      const inputAmount = wrapper.find('.amountTopUp');
      inputAmount.simulate('change', {
        target: {
          value: '12300000'
        },
      });
      expect(wrapper.state('amount')).toBe('12300000');
    });
    it('Should return another correct amount when user input top up', () => {
      const wrapper = shallow(<TopUpWallet />);
      const inputAmount = wrapper.find('.amountTopUp');
      inputAmount.simulate('change', {
        target: {
          value: '34000000'
        },
      });
      expect(wrapper.state('amount')).toBe('34000000');
    });
  });
});