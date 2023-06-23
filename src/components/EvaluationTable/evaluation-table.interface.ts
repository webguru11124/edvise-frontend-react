export interface TeacherProps {
  avatar: string;
  name: string;
  code: string;
}

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  page: number;
  setPage: (n: number) => void;
}

export interface EvaluationTableProps {
  datas: Array<TeacherProps>;
  pageSize: number;
}

export type RangeContent = number | 'NextDot' | 'PrevDot';
