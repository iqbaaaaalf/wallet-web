import { mount } from 'enzyme';
import React from 'react';
import LoginForm from '../js/LoginForm';

describe('LoginForm', () => {
  describe('#handleInputUsername', () => {
    it('should save name with Budi', () => {
      const wrapper = mount(<LoginForm/>);
      const inputUserName = wrapper.find('.username');
      inputUserName.simulate('change', {
        target: {
          value: 'Budi',
        },
      });
      expect(wrapper.state('username')).toBe('Budi');
    });

    it('should save name with Doni', () => {
      const wrapper = mount(<LoginForm/>);
      const inputUserName = wrapper.find('.username');
      inputUserName.simulate('change', {
        target: {
          value: 'Doni',
        },
      });
      expect(wrapper.state('username')).toBe('Doni');
    });

    it('should change ifUsernameEmpty to empty string when input type change', () => {
      const wrapper = mount(<LoginForm/>);
      const inputUserName = wrapper.find('.username');

      wrapper.setState({ errorMessage: { ifUsernameEmpty: 'username is required' } });
      inputUserName.simulate('change', {
        target: {
          value: 'Doni',
        },
      });
      expect(wrapper.state('errorMessage').ifUsernameEmpty).toBe('');
    });
  });

  describe('#handleInputPassword', () => {
    it('should save password with 123456', () => {
      const wrapper = mount(<LoginForm/>);
      const inputPassword = wrapper.find('.password');
      inputPassword.simulate('change', {
        target: {
          value: '123456',
        },
      });
      expect(wrapper.state('password')).toEqual('123456');
    });

    it('should save password with 12000', () => {
      const wrapper = mount(<LoginForm/>);
      const inputPassword = wrapper.find('.password');
      inputPassword.simulate('change', {
        target: {
          value: '12000',
        },
      });
      expect(wrapper.state('password')).toEqual('12000');
    });

    it('should change ifUsernameEmpty to empty string when input type change', () => {
      const wrapper = mount(<LoginForm/>);
      const inputPassword = wrapper.find('.password');

      wrapper.setState({ errorMessage: { ifPasswordEmpty: 'password is required' } });
      inputPassword.simulate('change', {
        target: {
          value: '47',
        },
      });
      expect(wrapper.state('errorMessage').ifPasswordEmpty).toBe('');
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

  });
});