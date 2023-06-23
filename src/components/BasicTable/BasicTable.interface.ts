import { DropdownOptionTypes } from 'Components/DropdownMenu';

export interface BasicTableProps {
  data: any[];
  columns: any[];
  options?: DropdownOptionTypes[];
  rowClicked?: (row: Record<string, any>) => void;
}
