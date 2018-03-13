import React from 'react';
import { shallow, mount } from 'enzyme';
import Transfer from '../../js/components/Transfer/Transfer';

describe('Transfer', () => {
  describe('handleFrom', () => {
    it('should return Name of owner WalletId', () => {
      const wrapper = shallow(<Transfer />);
      const data = {
        name: 'Budi',
      };
      wrapper.state(data);
      const from = wrapper.find('span');
      expect(from.text()).toEqual('Budi');
    });
  });
  describe('handleReceiver', () => {
    it('should return correct value of payee list ', () => {
      const wrapper = shallow(<Transfer/>);
      const data = {
        name : 'Doni',
      };
      wrapper.state(data);
      const to = wrapper.find('a').at(0);
      expect(to.text()).toEqual('Doni');
    });
  });
  describe('handleAmount', () => {
    it('should return amount of transfer', () => {
      const wrapper = shallow(<Transfer/>);
      const inputAmount = wrapper.find('.amount');
      inputAmount.simulate('change',{
        target:{
          value: '250000',
        },
      });
      expect(wrapper.state('amount')).toEqual('250000');
    });
  });
  describe('handleDescription', () => {
    it('should return text on textarea as description', () => {
      const wrapper = shallow(<Transfer/>);
      const inputDescription = wrapper.find('.description');
      inputDescription.simulate('change',{
        target:{
          value: 'hello this is text',
        },
      });
      expect(wrapper.state('description')).toEqual('hello this is text');
    });
  });
  describe('handleSubmit', () => {
    it('should call callback with given data', () => {
      const mockData = {
        from : 'Budi',
        to : 'Doni',
        amount : '30000',
        description : 'pay go food'
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<Transfer onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenLastCalledWith(mockData);
    });
  });
});