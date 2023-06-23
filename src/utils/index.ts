export * from './getButtonStyles';
export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export const transformVideoDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return `${minutes}:${parseInt(seconds, 10) < 10 ? '0' : ''}${seconds} min${
    minutes < 2 ? '' : 's'
  }`;
};

export const transformDateCreated = (value: string) => {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export const getENCharfromIndex = (index: number) =>
  String.fromCharCode(65 + index);

export const generateUUID = () => Math.random().toString(16).slice(-6);
