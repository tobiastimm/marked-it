import React from 'react';
import { mount } from 'enzyme';
import Bookmark from '../Bookmark';

describe('Component: Bookmark', () => {
  describe('Basic rendering', () => {
    it('should render a bookmark', () => {
      const props = {
        id: '1',
        title: 'My Bookmark'
      };

      const wrapper = mount(<Bookmark {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a bookmark with an url', () => {
      const props = {
        id: '2',
        title: 'My Bookmark',
        url: 'https://google.com'
      };

      const wrapper = mount(<Bookmark {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Prop testing', () => {
    it('should render with a title', () => {
      const props = {
        id: '3',
        title: 'My Bookmark'
      };

      const wrapper = mount(<Bookmark {...props} />);
      expect(wrapper.prop('title')).toEqual(props.title);
    });

    it('should render with an url', () => {
      const props = {
        id: '4',
        title: 'My Bookmark',
        url: 'https://google.com'
      };

      const wrapper = mount(<Bookmark {...props} />);
      expect(wrapper.prop('url')).toEqual(props.url);
    });

  });
});
