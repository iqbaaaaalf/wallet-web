import { shallow,mount } from 'enzyme/build/index';
import moxios from 'moxios';
import React from 'react';
import Dashboard from '../components/Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('#ShowData', () => {
    it('with name and balance of username', () => {
      const wrapper = shallow(<Dashboard/>);
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
  describe('fetch data', () => {
    it('should fetch balance data', (done) => {
      const wrapper = mount(<Dashboard/>);
      const response = {balance:10000};

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('balance')).toEqual(10000);
          done();
        });
      });
    });
  });
});
