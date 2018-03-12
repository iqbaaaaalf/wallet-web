import { mount } from 'enzyme';
import React from 'react';
import Sort from '../components/Sort';

describe('Sort', () => {
  describe('#_onSubmitHighest', () => {
    it('should call callback when button highest click', () => {
      const mockCallback = jest.fn();
      const wrapper = mount(<Sort onClick={mockCallback}/>);
      const buttonHighestElement = wrapper.find('.button-sort--highest');

      buttonHighestElement.simulate('click');

      expect(mockCallback).toHaveBeenCalled();
    });

    it('should call callback with given button data when button highest click', () => {
      const data = {
        sortMethod: 'ASC'
      };
      const mockCallback = jest.fn();
      const wrapper = mount(<Sort onClick={mockCallback}/>);
      const buttonHighestElement = wrapper.find('.button-sort--highest');

      buttonHighestElement.simulate('click');

      expect(mockCallback).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalledWith(data);
    });
  });
});