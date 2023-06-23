/* eslint-disable func-names */
import { FC, useRef, useEffect } from 'react';
import * as d3 from 'd3';

import {
  DraggableRectProps,
  VideoTimelineProps
} from '../evaluation.interface';

const VideoTimeline: FC<VideoTimelineProps> = ({
  duration,
  handleSeekChange,
  progress,
  timelineType,
  videoRef
}) => {
  const timeArrays = timelineType.timelineTypes;
  const fillColors = timelineType.timelineColors;

  // handle seeking of the video given an event with the target time
  function onClickHandleSeek(t: number) {
    videoRef.current.seekTo(t);
    videoRef.current.playing = true;
  }

  const fixedTimelineWidth = 100;
  const fixedTimelineHeight = 2;
  const totalBoxHeight = 1 + timeArrays.length * (fixedTimelineHeight + 1);

  // eslint-disable-next-line react/no-unstable-nested-components
  const DraggableRect: FC<DraggableRectProps> = ({
    width,
    height,
    fill,
    x
  }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref) {
        const handleDrag = d3
          .drag()
          .subject(function () {
            const me = d3.select(this);
            return { x: me.attr('x'), y: me.attr('y') };
          })
          .on('drag', function (event) {
            const me = d3.select(this);
            me.attr('x', event.x);

            handleSeekChange((duration / fixedTimelineWidth) * event.x);
          });

        const selection = d3.select<Element, unknown>('.drag-rect');
        handleDrag(selection);
      }
    }, []);

    return (
      <rect
        ref={ref}
        width={width}
        height={height}
        x={x}
        fill={fill}
        className='drag-rect cursor-pointer'
      />
    );
  };

  // this renders a rectangle per segment
  const timelineRectangles = [];
  for (let i = 0; i < timeArrays.length; i++) {
    for (let j = 0; j < timeArrays[i].length; j++) {
      const time = timeArrays[i][j];
      timelineRectangles.push(
        <rect
          x={(time.start * fixedTimelineWidth) / duration}
          y={1 + i * (fixedTimelineHeight + 1)} // offset y based on student vs teacher
          width={((time.end - time.start) * fixedTimelineWidth) / duration}
          height={fixedTimelineHeight}
          className={fillColors[i]}
          key={`${i}+${j}`}
          rx='0.5'
          style={{ cursor: 'pointer' }}
          onClick={() => onClickHandleSeek(time.start)}
        />
      );
    }
  }

  return (
    <>
      <svg
        version='1.1'
        viewBox={`0 0 ${fixedTimelineWidth} ${totalBoxHeight}`}
        className='border-t border-b border-neutral-200'
      >
        <rect
          width={fixedTimelineWidth}
          height={fixedTimelineHeight}
          fill='white'
          rx='0.5'
        />

        {/* filled progress bar */}

        <rect
          width={progress.played * fixedTimelineWidth}
          height={totalBoxHeight}
          fill='#242529'
          fillOpacity='0.1'
        />

        {timelineRectangles}
        {/* progress bar */}

        <DraggableRect
          width={0.2}
          height={totalBoxHeight}
          x={progress.played * fixedTimelineWidth}
          fill='black'
        />
      </svg>
    </>
  );
};

export default VideoTimeline;
