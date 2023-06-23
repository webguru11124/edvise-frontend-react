export interface ProgressCardProps {
  variant: 'success' | 'warning' | 'critical' | 'info';
  progress: number;
  text: string;
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  icon: JSX.Element;
}
