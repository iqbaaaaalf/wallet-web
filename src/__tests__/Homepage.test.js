import React from 'react';
import { mount, shallow } from 'enzyme';
import Homepage from '../js/Homepage';
import TransactionDesktop from '../js/TransactionDesktop';
import TransactionMobile from '../js/TransactionMobile';
import moxios from 'moxios';

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
      expect(wrapper.find(<TransactionDesktop/>).length).toBe(true);
      expect(wrapper.find(<TransactionMobile/>).length).toBe(true);
    });
  });
  describe('fetch data', () => {
    it('Should fill data with data from server', (done) => {
      const wrapper = mount(<Homepage/>);
      const response = [ {} ];
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('data').length).toEqual(2);
          done();
        });
      });
    });
  });
});