import React from 'react';
import styled from 'styled-components';
import BookmarksContainer from 'containers/BookmarksContainer';

const Wrapper = styled.div`
  margin-left: 2em;
  margin-top: 2em;
`;

const Content = () =>
  <Wrapper>
    <BookmarksContainer />
  </Wrapper>;

export default Content;
