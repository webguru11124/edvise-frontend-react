import { FC, useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import Skeleton from 'Elements/Skeleton';
import useGlobalStore from 'State/store';

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

import AnalyticsChart from './analytics-chart-item';
import { IChart } from '../datas/data-chart';

import { ChartProps } from '../evaluation.interface';
import { SwipePanel } from '../../../../components/SwipePanel';
import LessonAnalyticsDetail from './lesson-analytics-detail';
import { IFocusAreaOption } from '../common/add-to-focus-area';
import { FocusArea as IFocusArea } from '../../../../__generated/graphql';

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

export interface LessonAnalyticsProps {
  analytics: Array<ChartProps>;
  focusAreas: Array<IFocusArea>;
  handleFocusAreaChange: (datas: Array<IFocusArea>) => void;
  onRemove: (values: Array<IFocusAreaOption>, id: number) => void;
}

const LessonAnalyticsSkeleton: FC = () => {
  const skeletons = [];
  for (let i = 0; i < 5; ++i)
    skeletons.push(
      <div className='cursor-pointer pr-4 w-[350px] h-[350px]'>
        <Skeleton isLoading variant='chart' height='full' />
      </div>
    );
  return <>{skeletons}</>;
};

const LessonAnalytics: FC<LessonAnalyticsProps> = ({
  analytics,
  focusAreas,
  handleFocusAreaChange,
  onRemove
}) => {
  const isEvaluationLoading = useGlobalStore(
    (state) => state.isEvaluationLoading
  );
  const [collapsed, setCollapse] = useState(false);
  const [chartdata, setChartData] = useState(analytics);

  const [selectedChart, setSelectedChart] = useState<IChart | null>(null);
  const [isDetailViewOpen, setDetailViewOpen] = useState(false);

  const handleChange = (chart: IChart) => {
    const index = chartdata.findIndex(
      (cchart: IChart) => cchart.id === chart.id
    );
    setChartData((prevState) => {
      prevState[index] = chart;
      return prevState;
    });
  };

  const toggleDetailView = useCallback(() => {
    setDetailViewOpen(!isDetailViewOpen);
  }, [isDetailViewOpen, setDetailViewOpen]);

  const [selectedFocusAreas, setSelectedFocusAreas] = useState<Array<any>>([]);

  const handleOnClick = (chart: IChart) => {
    if (chart.id === undefined) {
      chart.type = 'chart';
      chart.id = Math.floor(Math.random() * 10000);
    }
    setSelectedChart(chart);

    const selected: Array<any> = [];
    for (let i = 0; i < focusAreas.length; ++i) {
      // const focusArea = focusAreas[i];
      // focusArea.objects.forEach((o) => {
      //   if (o.id === chart.id) {
      //     selected.push({
      //       value: focusArea.id,
      //       label: focusArea.title
      //     });
      //   }
      // });
    }
    setSelectedFocusAreas(selected);
    toggleDetailView();
  };

  const removeFromFocusArea = (values: IFocusAreaOption[]) => {
    if (selectedChart?.id) onRemove(values, selectedChart?.id);
  };

  return (
    <div className='w-full mt-6'>
      <h3 className='text-3xl font-bold text-neutral-800'>
        Lesson Analytics
        <button
          className='cursor-pointer p-3'
          onClick={() => {
            setCollapse(!collapsed);
          }}
        >
          {collapsed ? <ChevronUp /> : <ChevronDown />}
        </button>
      </h3>

      <SwipePanel>
        <div
          className={`flex mt-6 transition-all ${collapsed ? 'h-0' : 'h-fit'}`}
        >
          {isEvaluationLoading ? (
            <LessonAnalyticsSkeleton />
          ) : (
            chartdata.map((chart, idx) => (
              <div
                className='cursor-pointer pr-4 w-[350px] h-[350px]'
                onClick={() => handleOnClick(chart)}
                key={idx}
                role='button'
              >
                <AnalyticsChart
                  chartData={chart}
                  width='300'
                  height='350'
                  key={idx}
                />
              </div>
            ))
          )}
        </div>
      </SwipePanel>

      <LessonAnalyticsDetail
        isOpen={isDetailViewOpen}
        analytics={selectedChart}
        handleClose={toggleDetailView}
        handleChange={handleChange}
        focusAreas={focusAreas}
        handleFocusAreaChange={handleFocusAreaChange}
        selectedFocusAreas={selectedFocusAreas}
        onRemove={removeFromFocusArea}
      />
    </div>
  );
};

export default LessonAnalytics;
