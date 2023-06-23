import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AnalyticsChartItem from '../../../pages/MVP/evaluation/lesson-analytics/analytics-chart-item';
import { AnalyticsChartItemProp } from '../../../pages/MVP/evaluation/evaluation.interface';

const meta: Meta = {
  title: 'MVP/Evaluaiton/AnalyticsChartItem',
  component: AnalyticsChartItem
};

export default meta;

const Template: StoryFn<AnalyticsChartItemProp> = (args) => (
  <div className='p-5'>
    <AnalyticsChartItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chartData: {
    name: 'Talk Time by Speaker',
    graphtype: 'donut',
    options: {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        display: false,
        position: 'right'
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    },
    data: {
      labels: ['teacher', 'student', 'both'],
      datasets: [
        {
          data: [550.9597587000001, 172.3656800000001],
          backgroundColor: ['#42a5f5', '#F05467', '#c084fc'],
          hoverBackgroundColor: ['#42a5dd', '#F054dd', '#c084ee']
        }
      ]
    }
  },
  width: '300',
  height: '250'
};
