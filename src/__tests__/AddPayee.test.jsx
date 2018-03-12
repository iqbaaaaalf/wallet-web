import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPayee from '../js/AddPayee';

describe('AddPayee', () => {
  describe('handleInputPayee', () => {
    it('should return walletid if the username is exist', () => {
      const wrapper = shallow(<AddPayee />);
      const inputPayee = wrapper.find('.addPayee');
      inputPayee.simulate('change', {
        target: {
          value: 'andi',
        }
      });
      expect(wrapper.state('addPayee')).toBe('andi');
    });
    it('should return another walletid if the username is exist', () => {
      const wrapper = shallow(<AddPayee />);
      const inputPayee = wrapper.find('.addPayee');
      inputPayee.simulate('change', {
        target: {
          value: 'ali',
        }
      });
      expect(wrapper.state('addPayee')).toBe('ali');
    });
  });
  describe('handleInputOnSubmit', () => {
    it('should call callback after submit button', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<AddPayee onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
    });
    it('should call callback with given data', () => {
      const mockData = {
        addPayee: 'aliando',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<AddPayee onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenLastCalledWith(mockData);
    });
    it('should change state of errorInvalid when walletId on addPayee is empty', () => {
      const mockData = {
        addPayee: '',
      };
      const wrapper = mount(<AddPayee onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorInvalid')).toEqual('Invalid Wallet Id');
    });
  });
});