export interface LessonProps {
  imageUrl: string;
  title: string;
  date: string;
}

export interface AnalyzedLessionProps {
  analyzedLessons: Array<LessonProps>;
}
