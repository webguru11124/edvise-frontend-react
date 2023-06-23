export interface FolderProps {
  title: string;
  date: string;
  progress: number;
  subs: Array<SubFolderProps>;
  open: boolean;
}

export interface SubFolderProps {
  title: string;
  date: string;
  progress: number;
  tableOptions: { title: string; action: () => void }[];
}

export interface LessonFolderProps {
  lessonFolders: Array<FolderProps>;
}
