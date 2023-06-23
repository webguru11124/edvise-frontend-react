import { FC, useRef, useState } from 'react';

interface SwipePanelProps {
  children?: React.ReactElement | React.ReactElement[];
}

const SwipePanel: FC<SwipePanelProps> = ({ children }) => {
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = containerRef.current;
    if (container == null) return;

    setDragging(true);
    setStartX(e.pageX - container.offsetLeft);
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = containerRef.current;
    if (container == null || !isDragging) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    setStartX(e.pageX - container.offsetLeft);

    container.scrollLeft -= walk;
  };

  return (
    <div
      className={`select-none overflow-hidden w-full ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      } flex`}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={containerRef}
      role='presentation'
    >
      {children}
    </div>
  );
};

SwipePanel.defaultProps = {
  children: <></>
};

export default SwipePanel;
