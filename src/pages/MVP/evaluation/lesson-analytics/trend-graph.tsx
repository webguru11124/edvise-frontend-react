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

interface TrendGraph {
  chartData: any;
  width: string;
  height: string;
}

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

const TrendGraph: FC<TrendGraph> = ({ chartData, width, height }) => {
  return (
    <>
      {chartData.graphtype === 'donut' && (
        <Doughnut
          height={height}
          width={width}
          data={chartData.data}
          options={chartData.options}
        />
      )}
      {chartData.graphtype === 'barchart' && (
        <Bar
          className=''
          height={height}
          width={width}
          options={chartData.options}
          data={chartData.data}
        />
      )}
      {chartData.graphtype === 'linechart' && (
        <Line
          className=''
          height={height}
          width={width}
          options={chartData.options}
          data={chartData.data}
        />
      )}
    </>
  );
};

export default TrendGraph;
