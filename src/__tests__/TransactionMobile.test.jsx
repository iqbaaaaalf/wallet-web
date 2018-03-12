import React from 'react';
import TransactionItemMobile from '../components/TransactionItemMobile';
import TransactionMobile from '../components/TransactionMobile';
import { shallow } from 'enzyme';


describe('TransactionMobile', () => {
  describe('rendering', () => {
    it('should render TransactionItemMobile without crashing', () => {
      const wrapper = shallow (<TransactionMobile />);
      expect(wrapper.contains(<TransactionItemMobile/>)).toBe(true);
    });
  });
});


