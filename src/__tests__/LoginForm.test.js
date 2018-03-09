import { shallow } from 'enzyme';
import React from 'react';
import LoginForm from '../js/LoginForm';

describe('LoginForm', () => {
  describe('#handleInputUsername', () => {
    it('should save name with Budi', () => {
      const wrapper = shallow(<LoginForm />);
      const inputUserName = wrapper.find('#username');
      inputUserName.simulate('change',{
        target:{
          value: 'Budi',
        },
      });
      expect(wrapper.state('username')).toBe('Budi');
    });
    it('should save name with Doni', () => {
      const wrapper = shallow(<LoginForm />);
      const inputUserName = wrapper.find('#username');
      inputUserName.simulate('change',{
        target:{
          value: 'Doni',
        },
      });
      expect(wrapper.state('username')).toBe('Doni');
    });
    it('should save name with Correct input', () => {
      const wrapper = shallow(<LoginForm />);
      const inputUserName = wrapper.find('#username');
      inputUserName.simulate('change',{
        target:{
          value: 'Doni',
        },
      });
      expect(wrapper.state('username')).not.toBe('Budi');
    });
  });
});