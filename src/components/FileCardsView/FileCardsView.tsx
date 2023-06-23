import React, { FC } from 'react';
import { FileCard } from '../FileCard';
import { FileCardProps } from '../FileCard/FileCard';

export interface FileCardsViewProps {
  titleText: string;
  files: FileCardProps[];
}

const FileCardsView: FC<FileCardsViewProps> = ({ titleText, files }) => {
  return (
    <>
      <div className='mb-5'>
        <p className='font-bold text-neutral-500'>{titleText}</p>
      </div>
      <div className='grid gap-10 grid-cols-4'>
        {files.map((file) => (
          <FileCard
            fileName={file.fileName}
            fileSize={file.fileSize}
            image={file.image}
          />
        ))}
      </div>
    </>
  );
};

export default FileCardsView;
