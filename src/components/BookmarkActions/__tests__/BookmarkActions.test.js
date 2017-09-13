import React from 'react';
import { mount } from 'enzyme';
import BookmarkActions from '../BookmarkActions';

describe('Component: BookmarkActions', () => {
  describe('Basic rendering', () => {
    it('should render a menu without actions', () => {
      const props = {
        id: '1'
      };
      const wrapper = mount(<BookmarkActions {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a menu with actions', () => {
      const props = {
        id: '1',
        actions: [{ id: '2', title: 'My Action', onClick: () => {} }]
      };
      const wrapper = mount(<BookmarkActions {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
