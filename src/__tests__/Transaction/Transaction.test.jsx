import { mount, shallow } from 'enzyme/build/index';
import React from 'react';
import moxios from 'moxios';
import Transaction from '../../js/components/Transaction/Transaction';
import TransactionDesktop from '../../js/components/Transaction/TransactionDesktop';
import TransactionMobile from '../../js/components/Transaction/TransactionMobile';

describe('Transaction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('#FetchData', () => {
    it('should fetch transaction data', (done) => {
      const wrapper = mount(<Transaction/>);
      const response = [];
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        }).then(() => {
          expect(wrapper.state('transactionCollection')).toEqual(response);
          done();
        });
      });
    });
  });
});