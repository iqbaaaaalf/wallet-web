import React from 'react';
import TransactionItemMobile from '../../js/components/Transaction/TransactionItemMobile';
import TransactionMobile from '../../js/components/Transaction/TransactionMobile';
import { shallow } from 'enzyme';


describe('TransactionMobile', () => {
  describe('rendering', () => {
    it('should render TransactionItemMobile without crashing', () => {
      const wrapper = shallow (<TransactionMobile />);
      expect(wrapper.contains(<TransactionItemMobile/>)).toBe(true);
    });
  });
});


