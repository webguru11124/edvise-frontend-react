import { FC, useCallback, useEffect, useState } from 'react';
import { CameraAlt, Close, CreateOutlined } from '@mui/icons-material';

import { Avatar } from 'Components/Avatar';
import { TextField } from 'Components/TextField';
import { Button } from 'Components/Button';
import { Modal } from 'Components/Modal';
import { CropModal } from 'Components/CropModal';
import { useAuthInfo } from '@propelauth/react';
import { UseAuthInfoLoggedInProps } from '@propelauth/react/types/useAuthInfo';
import Avatar1 from 'Assets/avatar2.png';

interface IUser {
  firstName: string;
  lastName: string;
}

const Settings: FC = () => {
  const authInfo = useAuthInfo() as UseAuthInfoLoggedInProps;
  const [isEditModalopen, setEditModalOpen] = useState(false);
  const [user, setUser] = useState<IUser>({
    firstName: 'Michel',
    lastName: 'Jakson'
  });

  const userRole = authInfo.orgHelper.getOrgs()?.[0]?.userAssignedRole;

  const [password, setPassword] = useState({
    old: '',
    new: '',
    confirm: ''
  });
  const [isCropModalOpen, setCropModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [avatar, setAvatar] = useState(Avatar1);

  useEffect(() => {
    if (!authInfo.user) return;
    setUser({
      firstName: authInfo.user.firstName || '',
      lastName: authInfo.user.lastName || ''
    });
  }, [authInfo.user]);

  const toggleEditModal = useCallback(() => {
    setEditModalOpen(!isEditModalopen);
  }, [setEditModalOpen, isEditModalopen]);

  const updateUserInfo = useCallback(() => {
    toggleEditModal();
  }, [toggleEditModal]);

  const onChangePassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setPassword((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    },
    [setPassword]
  );

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgSrc(reader.result?.toString() || '');
        setCropModalOpen(true);
        e.target.value = '';
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const saveImage = useCallback(
    (base64: string) => {
      setAvatar(base64);
    },
    [setAvatar]
  );

  return (
    <div className='w-full'>
      <div className='py-3 px-10'>
        <div className='flex justify-center items-center'>
          <div className='my-10 bg-white min-w-[600px] px-[70px] py-[50px]'>
            <div className='w-full flex items-center'>
              <div className='flex items-center'>
                <div className='relative'>
                  <Avatar
                    size='big'
                    shape='round'
                    url={avatar}
                    className='w-[100px] rounded-full'
                  />
                  <div className='absolute right-[2px] bottom-[2px] p-1 border-2 border-white bg-[#4032DC] rounded-full text-white flex justify-center items-cente'>
                    <CameraAlt fontSize='small' />
                  </div>

                  <input
                    type='file'
                    accept='image/*'
                    onChange={onSelectFile}
                    className='absolute left-0 right-0 top-0 bottom-0 rounded-full opacity-0'
                  />
                </div>

                <div className='ml-5'>
                  <h3 className='text-3xl font-bold text-neutral-900 leading-12'>
                    {user.firstName} {user.lastName}
                  </h3>
                  <h4 className='text-xl text-neutral-500 mt-1'>{userRole}</h4>
                </div>
              </div>
              <div className='ml-auto'>
                <button
                  className='p-4 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-200 active:bg-neutral-100'
                  onClick={toggleEditModal}
                >
                  <CreateOutlined />
                </button>
              </div>
            </div>

            <div className='mt-8 flex'>
              <div className='flex-1 mr-1'>
                <TextField
                  placeholder='First name'
                  type='text'
                  disabled
                  value={user.firstName}
                />
              </div>
              <div className='flex-1 ml-1'>
                <TextField
                  placeholder='Last name'
                  type='text'
                  disabled
                  value={user.lastName}
                />
              </div>
            </div>
            <div className='mt-6'>
              <TextField
                placeholder='Email'
                type='text'
                disabled
                value={authInfo.user.email}
              />
            </div>

            <div className='mt-8'>
              <h3 className='text-neutral-400 text-xl'>Change Password</h3>
              <div className='mt-4'>
                <TextField
                  placeholder='Old Password'
                  type='password'
                  name='old'
                  value={password.old}
                  onChange={onChangePassword}
                />
              </div>
              <div className='mt-4'>
                <TextField
                  placeholder='New Password'
                  type='password'
                  name='new'
                  value={password.new}
                  onChange={onChangePassword}
                />
              </div>
              <div className='mt-4'>
                <TextField
                  placeholder='Confirm Password'
                  type='password'
                  name='confirm'
                  value={password.confirm}
                  onChange={onChangePassword}
                />
              </div>
            </div>

            <div className='mt-6'>
              <Button
                text='Change Password'
                color='danger'
                width='fit-parent'
                disabled={
                  !password.old.length ||
                  !password.new.length ||
                  !password.confirm.length
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalopen} onClose={toggleEditModal}>
        <div className='flex flex-col w-[500px] px-12 py-6 pb-10'>
          <div className='ml-auto'>
            <button
              className='text-neutral-500 hover:text-neutral-600 active:text-neutral-500 outline-none'
              onClick={toggleEditModal}
            >
              <Close />
            </button>
          </div>

          <div className='w-full flex justify-center mt-2 relative'>
            <Avatar
              size='big'
              shape='round'
              url={avatar}
              className='w-[100px] rounded-full'
            />
          </div>

          <div className='mt-6 flex-col'>
            <div>
              <TextField
                placeholder='First name'
                type='text'
                value={user.firstName}
                name='firstName'
              />
            </div>

            <div className='mt-3'>
              <TextField
                placeholder='Last name'
                type='text'
                value={user.lastName}
                name='lastName'
              />
            </div>

            <div className='mt-3'>
              <TextField
                placeholder='Email'
                type='text'
                value={authInfo.user.email}
                name='email'
              />
            </div>

            <div className='mt-6 flex'>
              <div className='ml-auto flex gap-2'>
                <Button
                  text='Cancel'
                  color='secondary'
                  width='fit-content'
                  onClick={toggleEditModal}
                />
                <Button
                  text='Save'
                  width='fit-content'
                  onClick={updateUserInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <CropModal
        isOpen={isCropModalOpen}
        setOpen={setCropModalOpen}
        imageSrc={imgSrc}
        saveImage={saveImage}
      />
    </div>
  );
};

export default Settings;
