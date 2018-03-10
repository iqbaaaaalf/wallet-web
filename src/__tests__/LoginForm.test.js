import { shallow, mount } from 'enzyme';
import React from 'react';
import LoginForm from '../js/LoginForm';

describe('LoginForm', () => {
  describe('#handleInputUsername', () => {
    it('should save name with Budi', () => {
      const wrapper = shallow(<LoginForm/>);
      const inputUserName = wrapper.find('.username');
      inputUserName.simulate('change', {
        target: {
          value: 'Budi',
        },
      });
      expect(wrapper.state('username')).toBe('Budi');
    });

    it('should save name with Doni', () => {
      const wrapper = shallow(<LoginForm/>);
      const inputUserName = wrapper.find('.username');
      inputUserName.simulate('change', {
        target: {
          value: 'Doni',
        },
      });
      expect(wrapper.state('username')).toBe('Doni');
    });
  });
  describe('#handleInputPassword', () => {
    it('should save password with 123456', () => {
      const wrapper = shallow(<LoginForm/>);
      const inputPassword = wrapper.find('.password');
      inputPassword.simulate('change', {
        target: {
          value: '123456',
        },
      });
      expect(wrapper.state('password')).toEqual('123456');
    });

    it('should save password with 12000', () => {
      const wrapper = shallow(<LoginForm/>);
      const inputPassword = wrapper.find('.password');
      inputPassword.simulate('change', {
        target: {
          value: '12000',
        },
      });
      expect(wrapper.state('password')).toEqual('12000');
    });
  });

  describe('#handleInputOnSubmit', () => {
    it('should change state of ifUsernameEmpty when username is empty', () => {
      const mockData = {
        username: '',
        password: 'asdasd',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorMessage').ifUsernameEmpty).toEqual('username is require');
    });

    it('should change state of ifPasswordEmpty when password is empty', () => {
      const mockData = {
        username: 'admin',
        password: '',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorMessage').ifPasswordEmpty).toEqual('password is require');
    });

    it('should change state of ifCredentialWrong when username and password didn\'t match', () => {
      const mockData = {
        username: 'sam',
        password: 'smith',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');

      wrapper.setState(mockData);
      submit.simulate('click');

      expect(wrapper.state('errorMessage').ifCredentialWrong).toEqual(
          'invalid username or password');
    });
  });
});