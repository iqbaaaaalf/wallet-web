import { shallow,mount } from 'enzyme/build/index';
import moxios from 'moxios';
import React from 'react';
import UserName from '../components/UserName';

describe('Dashboard', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('#ShowData', () => {
    it('with name and balance of username', () => {
      const wrapper = shallow(<UserName/>);
      const data = {
        name: 'iqbal',
      };
      wrapper.setState(data);
      const username = wrapper.find('#username');
      expect(username.text()).toBe(`iqbal`);
    });
  });
  describe('fetch data', () => {
    it('should fetch balance data', (done) => {
      const wrapper = mount(<UserName/>);
      const response = {name:'iqbal'};

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('name')).toEqual('iqbal');
          done();
        });
      });
    });
  });
});
