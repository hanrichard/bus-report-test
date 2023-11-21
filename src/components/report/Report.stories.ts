import type { StoryObj } from '@storybook/react';

import { Report } from './Report';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Report',
  component: Report,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    organisation: "Westbus",
    date: "27/09/2023",
    busData: [
      {
        "busId": "94811",
        "routeVariant": "664 2 1",
        "deviationFromTimetable": 164
      }
    ]
  }
};