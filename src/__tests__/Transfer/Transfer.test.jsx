import { mount, shallow } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import Payeelist from '../../js/components/Transfer/Payeelist';
import Transfer from '../../js/components/Transfer/Transfer';

describe('Transfer', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('componentDidMount', () => {
    it('should change payeeList state after rendered', (done) => {
      const wrapper = shallow(<Transfer />);
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: [ { name: 'Test' } ],
        }).then(() => {
          expect(wrapper.state('payeeList')).toEqual([ { name: 'Test' } ]);
          done();
        });
      });
    });

    it('should change payeeList state to empty array when error happen while get payee list',
        (done) => {
          const wrapper = shallow(<Transfer />);
          moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
              status: 500,
            }).then(() => {
              expect(wrapper.state('payeeList')).toEqual([]);
              done();
            });
          });
        });
  });

  describe('handleFrom', () => {
    it('should return Name of owner WalletId', () => {
      const wrapper = shallow(<Transfer />);
      const data = {
        name: 'Budi',
      };
      wrapper.state(data);
      const from = wrapper.find('span');
      expect(from.text()).toEqual('Budi');
    });
  });

  describe('handleAmount', () => {
    it('should return amount of transfer', () => {
      const wrapper = shallow(<Transfer />);
      const inputAmount = wrapper.find('.amount');
      inputAmount.simulate('change', {
        target: {
          value: '250000',
        },
      });
      expect(wrapper.state('amount')).toEqual('250000');
    });
  });

  describe('handleDescription', () => {
    it('should return text on textarea as description', () => {
      const wrapper = shallow(<Transfer />);
      const inputDescription = wrapper.find('.description');
      inputDescription.simulate('change', {
        target: {
          value: 'hello this is text',
        },
      });
      expect(wrapper.state('description')).toEqual('hello this is text');
    });
  });

  describe('handle changing PayeeList', () => {
    it('should change "to" state when payeeList changing', (done) => {
      const wrapper = mount(<Transfer />);
      const payeeListWrapper = wrapper.find(Payeelist);
      const comboboxElement = payeeListWrapper.find('#comboPayee');
      comboboxElement.simulate('change', {
        target: {
          value: 'dona',
        },
      });
      const response = {
        id: 1,
      };
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('to').walletId).toEqual(1);
          done();
        });
      });
    });
  });

  describe('handleSubmit', () => {
    it('should change message state to Success', () => {
      const wrapper = mount(<Transfer />);
      wrapper.setState({
        amount: 1000,
        to: {
          walletId: 2,
        },
        from: {
          walletId: 3,
        },
      });
      const submit = wrapper.find('.submit');
      submit.simulate('click');
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
        }).then(() => {
          expect(wrapper.state('message')).toEqual('Success');
          done();
        });
      });
    });

    it('should change message state to Insufficient Amount when balance not enough', () => {
      const wrapper = mount(<Transfer />);
      wrapper.setState({
        amount: 30000,
        to: {
          walletId: 2,
        },
        from: {
          walletId: 3,
        },
      });
      const submit = wrapper.find('.submit');
      submit.simulate('click');
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 406,
          response: {
            message: 'Insufficient Amount',
          },
        }).then(() => {
          expect(wrapper.state('message')).toEqual('Insufficient Amount');
          done();
        });
      });
    });

    it('should call errorAmount if amount is empty', () => {
      const mockData = {
        from: 'Budi',
        to: 'Doni',
        amount: '',
        description: 'pay go food',
      };
      const mockFunction = jest.fn();
      const wrapper = mount(<Transfer onSubmit={mockFunction} />);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorAmount')).toEqual('Amount is require');
    });

    it('should call errorDescription if Description is empty', () => {
      const mockData = {
        from: 'Budi',
        to: 'Doni',
        amount: '20000',
        description: '',
      };
      const wrapper = mount(<Transfer />);
      const submit = wrapper.find('.submit');
      wrapper.setState(mockData);
      submit.simulate('click');
      expect(wrapper.state('errorDescription')).toEqual('Description is require');
    });
  });
});
