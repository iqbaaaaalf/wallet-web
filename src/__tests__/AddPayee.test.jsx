import { mount, shallow } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import AddPayee from '../js/AddPayee';

describe('AddPayee', () => {

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('onChangeText', () => {
    it('should change username state to andi when user input username andi', () => {
      const wrapper = shallow(<AddPayee />);
      const inputPayee = wrapper.find('#username');
      inputPayee.simulate('change', {
        target: {
          value: 'andi',
        },
      });
      expect(wrapper.state('username')).toBe('andi');
    });

    it('should change username state to ali when user input username ali', () => {
      const wrapper = shallow(<AddPayee />);
      const inputPayee = wrapper.find('#username');
      inputPayee.simulate('change', {
        target: {
          value: 'ali',
        },
      });
      expect(wrapper.state('username')).toBe('ali');
    });

    it('should reset errorInvalid state when user input username', () => {
      const wrapper = shallow(<AddPayee />);
      const inputPayee = wrapper.find('#username');
      wrapper.setState({
        errorInvalid: 'User Not Found',
      });
      inputPayee.simulate('change', {
        target: {
          value: 'ali',
        },
      });
      expect(wrapper.state('errorInvalid')).toBe('');
    });
  });

  describe('onClickButtonSearch', () => {
    it('should reset payee state when button search clicked', () => {
      const wrapper = mount(<AddPayee />);
      wrapper.setState({
        payee: {
          id: 1,
          username: 'test',
          name: 'Testing',
        },
      });
      const searchButton = wrapper.find('#searchPayee');
      searchButton.simulate('click');
      expect(wrapper.state('payee')).toEqual('');
    });

    it('should reset errorInvalid state when button search clicked', () => {
      const wrapper = mount(<AddPayee />);
      wrapper.setState({
        errorInvalid: 'User Not Found',
      });
      const searchButton = wrapper.find('#searchPayee');
      searchButton.simulate('click');
      expect(wrapper.state('errorInvalid')).toEqual('');
    });

    it('should change payee state when button search clicked', (done) => {
      const wrapper = mount(<AddPayee />);
      wrapper.setState({
        username: 'eddocip',
      });
      const button = wrapper.find('#searchPayee');
      button.simulate('click');

      const response = {
        id: 1,
        username: 'eddocip',
        name: 'eddo',
      };
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('payee')).toEqual(response);
          done();
        });
      });
    });

    it('should change errorInvalid state when specified username not found', (done) => {
      const wrapper = mount(<AddPayee />);
      wrapper.setState({
        username: 'eddocipa',
      });
      const button = wrapper.find('#searchPayee');
      button.simulate('click');

      const response = {
        message: 'User Not Found',
      };
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: response,
        }).then(() => {
          expect(wrapper.state('errorInvalid')).toEqual(response.message);
          done();
        });
      });
    });

    it('should call callback after submit button', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<AddPayee onSubmit={mockFunction} />);
      const submit = wrapper.find('.submit');
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
    });
    it('should call callback with given data', () => {
      const mockData = {
        payee: 'aliando',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<AddPayee onSubmit={mockFunction} />);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenLastCalledWith(mockData);
    });
    it('should change state of errorInvalid when walletId on addPayee is empty', () => {
      const mockData = {
        payee: '',
      };
      const wrapper = mount(<AddPayee onSubmit={jest.fn()} />);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorInvalid')).toEqual('Invalid Wallet Id');
    });
  });
  describe('handleInputOnPayee', () => {
    it('should display payee user', () => {
      const wrapper = shallow(<AddPayee />);
      const payeelist = [
        {
          username: 'iqbal',
        } ];
      wrapper.setState(payeelist);
      const username = wrapper.find('.payee');
      expect(username.text()).toEqual('iqbal');
    });
  });
});