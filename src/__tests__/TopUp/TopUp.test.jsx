import React from 'react';
import { shallow, mount } from 'enzyme';
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
  describe('handleSubmit', () => {
    it('should call callback with given data', () => {
      const mockData = {
        amount : '300000',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<TopUpWallet onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenLastCalledWith(mockData);
    });
    it('should call errorInvalid when amount is empty', () => {
      const mockData = {
        amount : '',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<TopUpWallet onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorInvalid')).toEqual('Invalid amount')
    });
  });
});