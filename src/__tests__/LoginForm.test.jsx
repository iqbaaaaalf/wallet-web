import { shallow, mount } from 'enzyme';
import React from 'react';
import LoginForm from '../components/LoginForm';

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
    it('should call callback after submit button', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<LoginForm onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
    });
    it('should call callback with given data', () => {
      const mockData = {
        username: 'iqbaaaaalf',
        password: 'asdasd',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<LoginForm onSubmit={mockFunction}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenLastCalledWith(mockData);
    });
    it('should change state of errorUsername when username is empty', () => {
      const mockData = {
        username: '',
        password: 'asdasd',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorUsername')).toEqual('username require');
    });
    it('should change state of errorPassword when password is empty', () => {
      const mockData = {
        username: 'admin',
        password: '',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorPassword')).toEqual('password require');
    });
    it('should change state of errorInvalid when username and password is empty', () => {
      const mockData = {
        username: '',
        password: '',
      };
      const wrapper = mount(<LoginForm onSubmit={jest.fn()}/>);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorInvalid')).toEqual('username and password is required');
    });
  });
});