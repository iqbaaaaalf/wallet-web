import { shallow } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import Homepage from '../js/Homepage';
import TransactionDesktop from '../js/TransactionDesktop';
import TransactionMobile from '../js/TransactionMobile';

describe('Homepage', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('#handleWelcome', () => {
    it('with name of username', () => {
      const wrapper = shallow(<Homepage/>);
      const data = {
        name: 'iqbal',
      };
      wrapper.setState(data);
      const heading = wrapper.find('#WelcomeMessage');
      expect(heading.text()).toBe(`Hello,iqbal`);
    });
    it('with another name of another username', () => {
      const wrapper = shallow(<Homepage/>);
      const data = {
        name: 'admin',
      };
      wrapper.setState(data);
      const heading = wrapper.find('#WelcomeMessage');
      expect(heading.text()).toBe(`Hello,admin`);
    });
  });
  describe('render', () => {
    it('should contains TransactionDesktop and TransactionMobile', () => {
      const wrapper = shallow(<Homepage/>);
      expect(wrapper.find(TransactionDesktop).length).toBe(1);
      expect(wrapper.find(TransactionMobile).length).toBe(1);
    });
  });
});