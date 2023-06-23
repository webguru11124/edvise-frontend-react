import { FC, useState, useCallback } from 'react';
import { Logo } from '../../../components/Sidebar/SidebarLogo';
import { Button } from '../../../components/Button';
import { CameraBig } from '../../../components/Icons';

import 'react-image-crop/src/ReactCrop.scss';

import { CropModal } from '../../../components/CropModal';

const UploadProfile: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const [imgSrc, setImgSrc] = useState('');
  const saveImage = useCallback(
    (base64: string) => {
      setProfileImage(base64);
    },
    [setProfileImage]
  );

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgSrc(reader.result?.toString() || '');
        setOpen(true);
        e.target.value = '';
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex-1 flex flex-col py-12 px-10'>
        <div className='h-[100px]'>
          <Logo />
        </div>

        <div className='w-[420px] flex items-center flex-col ml-auto mr-auto flex-3'>
          <h3 className='text-3xl font-bold text-neutral-800 leading-[3.5rem]'>
            Upload your profile picture
          </h3>

          <h4 className='text-base text-neutral-600 mb-[20px]'>
            Click on upload and create your profile
          </h4>

          <div
            className={`mt-[60px] w-[300px] h-[300px] border border-neutral-500 bg-neutral-100 rounded-full border-dashed hover:bg-neutral-200 relative overflow-hidden ${
              profileImage ? '' : 'p-[100px]'
            }`}
          >
            <div className='flex flex-col items-center'>
              {profileImage.length === 0 ? (
                <>
                  <CameraBig />
                  <h3 className='text-3xl font-bold mt-3'>Upload</h3>
                </>
              ) : (
                <img src={profileImage} alt='Profile' />
              )}

              <input
                type='file'
                accept='image/*'
                onChange={onSelectFile}
                className='absolute left-0 right-0 top-0 bottom-0 rounded-full opacity-0'
              />
            </div>
          </div>

          <div className='flex gap-5 mt-[50px]'>
            <Button
              shape='round'
              text='Skip'
              width='fit-content'
              color='secondary'
            />
            <Button shape='round' text='Continue' width='fit-content' />
          </div>
        </div>
      </div>

      <div className='flex-1 p-4'>
        <div className='bg-warning-200 w-full h-full flex justify-center items-center'>
          <img
            src='./images/upload-profile.png'
            className='w-[400px]'
            alt='Upload Profile'
          />
        </div>
      </div>

      <CropModal
        isOpen={isOpen}
        setOpen={setOpen}
        imageSrc={imgSrc}
        saveImage={saveImage}
      />
    </div>
  );
};

export default UploadProfile;
