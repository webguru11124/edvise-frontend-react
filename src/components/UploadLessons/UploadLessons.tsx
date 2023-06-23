import { FC, useEffect, useState } from 'react';
import { Close, PauseOutlined } from '@mui/icons-material';
import { useRubrics } from 'Hooks/useRubrics';
import Select, { IOption } from 'Elements/Select';
import useGlobalStore from 'State/store';
import { useObservation } from 'Hooks/useObservation';
import { Button } from 'Components/Button';
import AvatarImage from 'Assets/avatar.png';

import { Media, UserPlus } from '../Icons';
import { LinearProgress } from '../LinearProgress';
import InviteModal from './InviteModal';
import InviteBox from './InviteBox';
import { ObservationType } from '../../__generated/graphql';

type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;

export type R5 = Ran<100>;

export enum UploadStatus {
  NORMAL = 0,
  UPLOADING = 1,
  UPLOADED = 2
}

const invitees = [
  {
    id: 1,
    avatar: AvatarImage,
    email: 'work1@gmail.com',
    name: 'Same1',
    isSent: false
  },
  {
    id: 2,
    avatar: AvatarImage,
    email: 'work2@gmail.com',
    name: 'Same2',
    isSent: false
  },
  {
    id: 3,
    avatar: AvatarImage,
    email: 'work3@gmail.com',
    name: 'Same3',
    isSent: false
  }
];

export interface UploadProps {
  status: UploadStatus.NORMAL | UploadStatus.UPLOADED | UploadStatus.UPLOADING;
  uploadPercent: R5;
  showRubric?: boolean;
  showFeedback?: boolean;
  showEvaluator?: boolean;
  toggleModal?: () => void;
}

const UploadLessons: FC<UploadProps> = ({
  status,
  uploadPercent,
  showFeedback,
  showRubric,
  showEvaluator,
  toggleModal
}) => {
  const [rubrics] = useGlobalStore((state) => [state.rubrics]);

  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [invites, setInvites] = useState(invitees);
  const [isSent, setSent] = useState(false);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploadable, setUploadable] = useState(false);

  const defaultRubric: IOption = {
    id: 'default',
    label: 'Select Rubric'
  };

  useRubrics();
  const { createObservation } = useObservation();

  const [rubricOptions, setRubricOptions] = useState<Array<IOption>>([
    defaultRubric
  ]);
  const [currentRubric, setCurrentRubric] = useState<IOption>(defaultRubric);

  useEffect(() => {
    setRubricOptions([
      defaultRubric,
      ...rubrics.map((r) => ({
        id: r.id.toString(),
        label: r.name
      }))
    ]);
  }, [rubrics]);

  const onSendInvite = (id: number) => {
    setInvites((prevInvites) => {
      return prevInvites.map((t) => {
        if (t.id === id)
          return {
            ...t,
            isSent: true
          };
        return t;
      });
    });
  };

  const onChangeRubric = (value: IOption) => {
    setCurrentRubric(value);
  };

  const onSearch = (s: string) => {
    setSearch(s);
  };

  const getFilteredInvites = () => {
    return invites.filter(
      (t) => t.email.indexOf(search) !== -1 || t.name.indexOf(search) !== -1
    );
  };

  const getSentInvites = () => {
    return invites.filter((t) => t.isSent);
  };

  const onRemoveInvite = (id: number) => {
    setInvites((prevInvites) => {
      return prevInvites.map((t) =>
        t.id === id ? { ...t, isSent: false } : t
      );
    });
  };

  const initForm = () => {
    setName('');
    setDescription('');
    setCurrentRubric(rubricOptions[0]);
  };

  const onUploadLesson = () => {
    if (!name.length || !description.length || currentRubric.id === 'default')
      return;
    setUploading(true);
    createObservation({
      name,
      type: ObservationType.Sync,
      teacher_id: 0, // Todo: this must be changed to real teacher ID,
      organization_id: 1 // Todo: this must be changed to real organization id, we don't have extra field on propel auth yet, so let it be fake id for now
    }).then(() => {
      initForm();

      setUploading(false);
      if (typeof toggleModal === 'function') {
        toggleModal();
      }
    });
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  useEffect(() => {
    if (getSentInvites().length === 0) setSent(false);
  }, [setSent]);

  useEffect(() => {
    const updateUploadable =
      name.length !== 0 &&
      description.length !== 0 &&
      currentRubric.id !== 'default' &&
      !!uploadedFile;

    setUploadable(updateUploadable);
  }, [name, description, currentRubric, uploadedFile, setUploadable]);

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[700px]'>
        <div className='w-full px-12 py-10 bg-white rounded-lg border border-slate-200'>
          <div className='flex w-full'>
            <h3 className='font-semibold text-xl text-slate-800'>
              Upload Lesson
            </h3>
          </div>

          <div className='border-t border-neutral-30 mt-2' />

          <div className='mt-6 mb-5'>
            <input
              type='text'
              className='outline-0 w-full bg-neutral-50 rounded-md py-3 px-5 border border-slate-200 placeholder:text-neutral-500'
              placeholder='Name'
              value={name}
              onChange={onChangeName}
            />
            <textarea
              placeholder='Description'
              className='outline-0 w-full bg-neutral-50 rounded-md py-3 px-5 border-slate-200 mt-2 min-h-[150px] placeholder:text-neutral-500'
              value={description}
              onChange={onChangeDescription}
            />
          </div>
          {showRubric && (
            <Select
              options={rubricOptions}
              value={currentRubric}
              onChange={onChangeRubric}
            />
          )}
          {showFeedback && (
            <div className='mt-3 border border-slate-300 border-md p-3 rounded-lg text-slate-900 flex items-center'>
              <input
                type='checkbox'
                className='mr-2 rounded-md accent-sky-600'
              />
              include coaching feedback
            </div>
          )}

          {showEvaluator && !isSent ? (
            <div
              className='cursor-pointer mt-3 border border-blue-500 rounded-lg flex p-3 text-blue-500 justify-center hover:text-blue-700 hover:border-blue-700 active:text-blue-500 active:border-blue-500'
              onClick={() => {
                setInviteModalOpen(true);
              }}
              role='button'
            >
              <div className='mr-2'>
                <UserPlus />
              </div>
              Add Evaluator
            </div>
          ) : (
            getSentInvites().length !== 0 && (
              <div className='mt-3'>
                <InviteBox
                  invites={getSentInvites()}
                  onRemove={onRemoveInvite}
                />
              </div>
            )
          )}

          <div className='mt-5 relative'>
            <input
              type='file'
              className='absolute w-[100%] h-[100%] opacity-0'
              onChange={(e) =>
                setUploadedFile(e.target.files ? e.target.files[0] : null)
              }
            />
            <div
              className={`border border-dashed border-blue-700 pt-6 pb-7 flex-col items-center content-center bg-info-100 rounded-md ${
                status === UploadStatus.NORMAL ? 'flex' : 'hidden'
              }`}
            >
              <div className='p-4 bg-info-200 rounded-full text-blue-700'>
                <Media />
              </div>
              <h4 className='font-normal mt-3'>
                <span className='underline font-bold black mr-1'>
                  Browse from library
                </span>
                <span className='text-neutral-600'>or</span>
                <span className='font-semibold text-sky-400 ml-1'>
                  Upload from Storage
                </span>
              </h4>
              <h5 className='text-neutral-500 text-xs mt-1.5'>
                file size should be less than 2.5mb
              </h5>
            </div>

            <div
              className={`bg-neutral-50 border border-info-300 pt-4 px-6 pb-7 flex-col rounded-md ${
                status === UploadStatus.UPLOADING ? 'flex' : 'hidden'
              }`}
            >
              <div className='flex'>
                <div className='flex-1'>
                  <h4 className='text-neutral-700 text-base font-bold'>
                    Uploading...
                  </h4>
                  <h4 className='text-neutral-500 mt-0.5 text-xs'>
                    {uploadPercent}% . 4 Seconds left
                  </h4>
                </div>
                <div className='flex items-center'>
                  <button className='rounded-full bg-neutral-400 text-white p-2 mr-1.5 flex items-center'>
                    <PauseOutlined
                      fontSize='small'
                      sx={{
                        fontSize: 13,
                        fontWeight: 'bolder'
                      }}
                    />
                  </button>
                  <button className='rounded-full bg-critical-400 text-white p-2 ml-1.5 flex items-center'>
                    <Close
                      fontSize='small'
                      sx={{
                        fontSize: 13,
                        fontWeight: 'bolder'
                      }}
                    />
                  </button>
                </div>
              </div>

              <div className='mt-1.5 w-full'>
                <LinearProgress value={uploadPercent} color='sky' />
              </div>
            </div>

            <div
              className={`bg-neutral-50 border border-info-300 py-4 px-6 flex-col rounded-md ${
                status === UploadStatus.UPLOADED ? 'flex' : 'hidden'
              }`}
            >
              <div className='flex'>
                <div className='flex-1'>
                  <h4 className='text-neutral-700 text-base font-bold'>
                    Filename.mp4
                  </h4>
                  <h4 className='text-neutral-500 mt-0.5 text-xs'>23.1mb</h4>
                </div>
                <div className='flex items-center'>
                  <button className='rounded-full bg-critical-500 text-white p-2 ml-1.5 flex items-center'>
                    <Close
                      fontSize='small'
                      sx={{
                        fontSize: 13,
                        fontWeight: 'bolder'
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mb-10'>
          <div className='mt-5 sm:mt-6 flex gap-3 ml-auto'>
            <Button text='Cancel' color='secondary' />
            <Button
              color='primary'
              className='w-fit justify-center rounded-lg bg-blue-600 py-3.5 text-white border-0 outline-none px-6 hover:bg-blue-500 active:bg-blue-600 disabled:bg-blue-200'
              disabled={!isUploadable || isUploading}
              onClick={onUploadLesson}
              text='Upload'
              isLoading={isUploading}
            />
          </div>
        </div>
      </div>

      <InviteModal
        isOpen={isInviteModalOpen}
        onClose={() => {
          setInviteModalOpen(false);
          setSent(true);
        }}
        onSearch={onSearch}
        invites={getFilteredInvites()}
        onSendInvite={onSendInvite}
      />
    </div>
  );
};

export default UploadLessons;
