import { Switch } from '@headlessui/react';
import { FC } from 'react';

export interface ToggleProps {
  color:
    | 'secondary'
    | 'skyblue'
    | 'neutral'
    | 'blue'
    | 'critical'
    | 'warning'
    | 'success'
    | 'info';
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({ color, checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? `bg-${color}-500` : 'bg-gray-200'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
    >
      <span className='sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className={`${
          checked ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

Toggle.defaultProps = {
  onChange: () => {
    /* */
  }
};

export default Toggle;
