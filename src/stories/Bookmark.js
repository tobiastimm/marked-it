import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import Bookmark from '../components/Bookmark';

storiesOf('Bookmark', module)
  .addDecorator(muiTheme('dark'))
  .add('Default', () =>
    <Bookmark id="1" title="My first bookmark" url="https://google.com" />
  );
