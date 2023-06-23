import { SvgIconProps } from '@mui/material';

export interface DropDownMenuTypes {
  options: DropdownOptionTypes[];
  dropdownText?: string;
  icon?: React.ReactElement<SvgIconProps>;
  rowData?: Record<string, any>;
}

export interface DropdownOptionTypes {
  title: string;
  action: (
    arg?: Record<string, string | number | any> | string | number | undefined
  ) => void;
  icon?: React.ReactElement<SvgIconProps>;
  color?: string;
}
