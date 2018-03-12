import React from 'react';
import { mount } from 'enzyme';
import FilterAmount from '../components/Filter/FilterAmount.jsx';

describe('FilterQuery', () => {
  describe('#_onChangeInput', () => {
    it('should change amount query state', () => {
      const wrapper = mount(<FilterAmount onChange={jest.fn()}/>);
      const inputElement = wrapper.find('.filter-query--amount');
      inputElement.simulate('change', {
        target: {
          value: '50',
        },
      });

      expect(wrapper.state('amount')).toEqual('50');
    });

    it('should change amount query state "47"', () => {
      const wrapper = mount(<FilterAmount onChange={jest.fn()}/>);
      const inputElement = wrapper.find('.filter-query--amount');
      inputElement.simulate('change', {
        target: {
          value: '47',
        },
      });

      expect(wrapper.state('amount')).toEqual('47');
    });
  });
});