type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;

type R5 = Ran<100>;

export enum UploadStatus {
  NORMAL = 0,
  UPLOADING = 1,
  UPLOADED = 2
}

export interface UploadProps {
  status: UploadStatus.NORMAL | UploadStatus.UPLOADED | UploadStatus.UPLOADING;
  uploadPercent: R5;
  analyzePercent: R5;
}
