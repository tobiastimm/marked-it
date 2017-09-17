import SearchBar from 'material-ui-search-bar';
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';

const StyledSearch = styled(SearchBar)`width: 100%;`;

const enhance = compose(
  withState('value', 'setValue', ''),
  withHandlers({
    onChange: ({ setValue }) => event => setValue(value => event)
  })
);

const Search = enhance(({ bookmarks, value, onChange }) => (
  <StyledSearch dataSource={bookmarks} value={value} onChange={onChange} />
));

export default Search;
