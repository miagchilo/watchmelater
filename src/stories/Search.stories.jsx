import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Search } from './Search';

export default {
  title: 'Example/Search',
  component: Search,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};