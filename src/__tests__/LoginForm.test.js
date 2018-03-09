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
  describe('#handleInputPassword', () => {
    it('should save password with 123456', () => {
      const wrapper = shallow(<LoginForm />);
      const inputPassword = wrapper.find('#password');
      inputPassword.simulate('change',{
        target:{
          value:'123456',
        },
      });
      expect(wrapper.state('password')).toEqual('123456');
    });
    it('should save password with 12000', () => {
      const wrapper = shallow(<LoginForm />);
      const inputPassword = wrapper.find('#password');
      inputPassword.simulate('change',{
        target:{
          value:'12000',
        },
      });
      expect(wrapper.state('password')).toEqual('12000');
    });
    it('should save password with correct value', () => {
      const wrapper = shallow(<LoginForm />);
      const inputPassword = wrapper.find('#password');
      inputPassword.simulate('change',{
        target:{
          value:'12000',
        },
      });
      expect(wrapper.state('password')).not.toEqual('13000');
    });
  });
});