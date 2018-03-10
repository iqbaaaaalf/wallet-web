import React from 'react';
import { mount } from 'enzyme';
import Homepage from '../js/Homepage';

describe('Homepage', () => {
  describe('#handleWelcome', () => {
    it('with name of username', () => {
      const wrapper = mount(<Homepage/>);
      const data ={
        name : 'iqbal',
      };
      wrapper.setState(data);
      const heading = wrapper.find('h1');
      expect(heading.text()).toBe(`Hello,iqbal`);
    });
    it('with another name of another username', () => {
      const wrapper = mount(<Homepage/>);
      const data ={
        name : 'admin',
      };
      wrapper.setState(data);
      const heading = wrapper.find('h1');
      expect(heading.text()).toBe(`Hello,admin`);
    });
  });
});