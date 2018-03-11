import React from 'react';
import { mount, shallow } from 'enzyme';
import Homepage from '../js/Homepage';
import TransactionDesktop from '../js/TransactionDesktop';
import TransactionMobile from '../js/TransactionMobile';

describe('Homepage', () => {
  describe('#handleWelcome', () => {
    it('with name of username', () => {
      const wrapper = shallow(<Homepage/>);
      const data ={
        name : 'iqbal',
      };
      wrapper.setState(data);
      const heading = wrapper.find('h1');
      expect(heading.text()).toBe(`Hello,iqbal`);
    });
    it('with another name of another username', () => {
      const wrapper = shallow(<Homepage/>);
      const data ={
        name : 'admin',
      };
      wrapper.setState(data);
      const heading = wrapper.find('h1');
      expect(heading.text()).toBe(`Hello,admin`);
    });
  });
  describe('render', () => {
    it('should contains TransactionDesktop and TransactionMobile', () => {
      const wrapper = shallow(<Homepage/>);
      expect(wrapper.contains(<TransactionDesktop/>)).toBe(true);
      expect(wrapper.contains(<TransactionMobile/>)).toBe(true);
    });
  });
});