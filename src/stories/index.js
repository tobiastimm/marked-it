import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

storiesOf('Bookmark', module)
  .addDecorator(muiTheme());
