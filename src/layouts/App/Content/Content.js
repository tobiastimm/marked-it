import EntriesContainer from 'containers/EntriesContainer';
import FolderContainer from 'containers/FolderContainer';
import Grid from 'material-ui/Grid';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6em;
  align-items: stretch;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
`;

const Content = () =>
  <Wrapper>
    <EntriesContainer />
    <FolderContainer />
  </Wrapper>;

export default Content;
