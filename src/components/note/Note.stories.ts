import type { StoryObj } from '@storybook/react';

import { Note } from './Note';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Note',
  component: Note,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    organisation: 'test'
  }
};
