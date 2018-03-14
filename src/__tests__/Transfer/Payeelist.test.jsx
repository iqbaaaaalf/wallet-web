import { mount, shallow } from 'enzyme';
import React from 'react';
import Payeelist from '../../js/components/Transfer/Payeelist';

describe('PayeeList', () => {
  describe('#showRowData', () => {
    it('should display payeelist', () => {
      const payee = [{name: 'dona'}];
      const wrapper = mount(<Payeelist payeelisting={payee}/>);
      const optionrow = wrapper.find('select').at(0);
      let nameColoumn = optionrow.find('option').at(0).text();
      const actualOutput = `${nameColoumn}`;
      const expectedOutput = 'dona';
      expect(actualOutput).toBe(expectedOutput)
    });
    it('should display another payeelist', () => {
      const payee = [{name: 'doni'}];
      const wrapper = mount(<Payeelist payeelisting={payee}/>);
      const optionrow = wrapper.find('select').at(0);
      let nameColoumn = optionrow.find('option').at(0).text();
      const actualOutput = `${nameColoumn}`;
      const expectedOutput = 'doni';
      expect(actualOutput).toBe(expectedOutput)
    });
  });
});

