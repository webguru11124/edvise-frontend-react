import { FC } from 'react';

import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';

import { AnalyticsChartItemProp } from '../evaluation.interface';
import './analytics-chart-item.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement
);

const AnalyticsChartItem: FC<AnalyticsChartItemProp> = ({ chartData }) => {
  return (
    <div className='cursor-pointer h-full'>
      <div className='w-full mr-5 p-6 bg-white rounded-md h-full flex flex-col items-center'>
        <div className='text-xl pb-5 font-bold text-neutral-700'>
          {chartData.name}
        </div>
        {chartData.graphtype === 'donut' && (
          <div className='chart-container'>
            <Doughnut data={chartData.data} options={chartData.options} />
          </div>
        )}
        {chartData.graphtype === 'barchart' && (
          <div className='chart-container'>
            <Bar options={chartData.options} data={chartData.data} />
          </div>
        )}
        {chartData.graphtype === 'linechart' && (
          <div className='chart-container'>
            <Line options={chartData.options} data={chartData.data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsChartItem;
