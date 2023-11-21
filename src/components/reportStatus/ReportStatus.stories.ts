import type { StoryObj } from '@storybook/react';

import { ReportStatus } from './ReportStatus';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/ReportStatus',
  component: ReportStatus,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    deviationFromTimetable: 300
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Secondary: Story = {
  args: {
    deviationFromTimetable: -100
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tertiary: Story = {
  args: {
    deviationFromTimetable: 100
  }
};
