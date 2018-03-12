import { mount } from 'enzyme/build/index';
import React from 'react';
import Dashboard from '../components/Dashboard';
import moxios from 'moxios';

describe('Dashboard', () => {
  describe('#ShowData', () => {
    it('with name and balance of username', () => {
      const wrapper = mount(<Dashboard/>);
      const data = {
        name: 'iqbal',
        balance: '400000',

      };
      wrapper.setState(data);
      const heading = wrapper.find('h1');
      const balance = wrapper.find('span');
      expect(heading.text()).toBe(`iqbal`);
      expect(balance.text()).toBe('400000');
    });
  });
  describe('#fetchbalance', function() {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it('should change balance with fetch response', () => {
      let request = moxios.request.at(1);
      request.
    });
  });
});
