import { FC } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    }
  },
  scales: {
    y: {
      display: false,
      showLabelBackdrop: false
    }
  },
  elements: {
    point: {
      radius: 0
    }
  }
};

const data = {
  labels: ['10/01', '10/15', '10/16', '10/17', '10/18'],
  datasets: [
    {
      backgroundColor: '#0E3AD8',
      borderColor: '#0E3AD8',
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 8, 3, 2, 4, 5],
      tension: 0.3
    },
    {
      backgroundColor: '#D5D7DE',
      borderColor: '#D5D7DE',
      label: 'Dataset 2',
      data: [3, 2, 1, 5, 2, 1, 2, 3, 4]
    }
  ]
};

const TrendingChart: FC = () => {
  return <Line options={options} data={data} />;
};

export default TrendingChart;
