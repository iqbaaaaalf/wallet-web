import React from 'react';
import { mount, shallow } from 'enzyme';
import Homepage from '../js/components/Homepage';
import Transaction from '../js/components/Transaction/Transaction';

describe('Homepage', () => {
  describe('#handleWelcome', () => {
    it('with name of username', () => {
      const wrapper = shallow(<Homepage/>);
      const data ={
        name : 'iqbal',
      };
      wrapper.setState(data);
      const heading = wrapper.find('#WelcomeMessage');
      expect(heading.text()).toBe(`Hello,iqbal`);
    });
    it('with another name of another username', () => {
      const wrapper = shallow(<Homepage/>);
      const data ={
        name : 'admin',
      };
      wrapper.setState(data);
      const heading = wrapper.find('#WelcomeMessage');
      expect(heading.text()).toBe(`Hello,admin`);
    });
  });
  describe('render', () => {
    it('should contains Transaction', () => {
      const wrapper = shallow(<Homepage/>);
      expect(wrapper.find(Transaction).length).toBe(1);
    });
  });
});