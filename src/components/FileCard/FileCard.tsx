import { FC } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export interface FileCardProps {
  image: string;
  fileName: string;
  fileSize: string;
}

const FileCard: FC<FileCardProps> = ({ image, fileName, fileSize }) => {
  if (!fileName && !fileSize) {
    return (
      <div className='w-auto max-h-full min-h-full h-52'>
        <div className='flex items-center justify-center bg-skyblue-50 rounded-xl h-full flex-1'>
          <label htmlFor='uploadFile'>
            <button className='flex items-center shadow bg-sky-400 rounded-md focus:shadow-outline focus:outline-none cursor-pointer text-white px-5 py-2 ml-3'>
              <span className='text-xs'>Upload File</span>
              <input type='file' className='hidden' id='uploadFile' />
              <UploadFileIcon className='font-semibold ml-3 text-xl' />
            </button>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className='w-auto mx-auto'>
      <div>
        <img src={image} alt={fileName} />
      </div>
      <div className='flex justify-between mt-5'>
        <div>
          <p className='text-lg font-bold'>{fileName}</p>
          <p className='text-neutral-500 text-sm'>{fileSize}</p>
        </div>
        <div className='flex items-center'>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default FileCard;
