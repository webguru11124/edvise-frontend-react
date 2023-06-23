import { MouseEventHandler, useRef, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { nanoid } from 'nanoid';
import { MultiSelectInput } from '../../MultiSelectInput';
import { User } from '../../PageHeader/components/User';
import { DropdownMenu } from '../../DropdownMenu';
import { Button } from '../../Button';
import AvatarImage from '../../../stories/assets/avatar.png';
import { MultiSelectInputOption } from '../../MultiSelectInput/MultiSelectInput';
import { SelectDropdownMenu } from '../../SelectDropdownMenu';

interface AddTeamMembersModalProps {
  handleCloseClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultValues = {
  name: 'Teacher Name',
  email: '',
  role: '',
  avatar: AvatarImage,
  id: ''
};

interface RefObject {
  resetValues: () => void;
}

const nanoID = nanoid();

export default function AddTeamMembersModal({
  handleCloseClick
}: AddTeamMembersModalProps) {
  const [selectedTeamMembers, setSelectedTeamMembers] = useState<
    readonly MultiSelectInputOption[]
  >([]);
  const [activeRole, setActiveRole] = useState('Admin');
  const [addedTeamMembers, setAddedTeamMembers] = useState<
    (typeof defaultValues)[]
  >([]);
  const multiSelectInputRef = useRef<RefObject>();

  const teamManagementOptions = [
    { title: 'Teacher', action: () => setActiveRole('Teacher') },
    { title: 'Admin', action: () => setActiveRole('Admin') },
    { title: 'Instructor', action: () => setActiveRole('Instructor') }
  ];

  const teamRoleOptions = [
    {
      title: 'Teacher',
      action: () => console.log('Teacher clicked')
    },
    {
      title: 'Admin',
      action: () => console.log('Admin clicked')
    },
    {
      title: 'Instructor',
      action: () => console.log('Instructor clicked')
    }
  ];

  const handleTeamMembersAdded = () => {
    const added: (typeof defaultValues)[] = [];
    selectedTeamMembers.forEach((member, i) => {
      added.push({
        ...defaultValues,
        email: member.value,
        role: activeRole,
        id: member.value + i
      });
    });
    setAddedTeamMembers([...addedTeamMembers, ...added]);
    multiSelectInputRef.current?.resetValues();
    setSelectedTeamMembers([]);
  };

  return (
    <div className='w-[600px] max-w-[600px] p-5'>
      <div className='flex justify-between'>
        <div className='flex'>
          <PersonAddAltIcon className='text-neutral-500' />
          <p className='text-xl ml-3'>Add member</p>
        </div>
        <div>
          <button onClick={handleCloseClick}>
            <ClearIcon />
          </button>
        </div>
      </div>
      <p className='text-neutral-500 font-normal'>
        Manage your team members and thier account permission here.
      </p>
      <hr className='my-5' />
      <div className='flex items-center mb-5'>
        <div className='flex-1 flex mr-2 pr-2 border-gray-300 border rounded-lg'>
          <div className='flex-1'>
            <MultiSelectInput
              setSelectedValues={setSelectedTeamMembers}
              ref={multiSelectInputRef}
            />
          </div>
          <DropdownMenu
            dropdownText={activeRole}
            icon={<ExpandMoreIcon />}
            options={teamManagementOptions}
          />
        </div>
        <Button
          text='Send Invite'
          size='sm'
          onClick={handleTeamMembersAdded}
          disabled={!selectedTeamMembers.length}
        />
      </div>
      <div>
        <p className='text-md text-neutral-500 mb-2'>Members</p>
        <div>
          {!addedTeamMembers.length && (
            <div className='text-center my-5'>
              <p className='text-neutral-500'>No members added</p>
            </div>
          )}
          {addedTeamMembers?.map((member) => (
            <div key={nanoID} className='flex justify-between my-8'>
              <User
                avatar={member.avatar}
                name={member.name}
                role={member.email}
              />
              <SelectDropdownMenu
                dropdownText={member.role}
                icon={<ExpandMoreIcon />}
                options={teamRoleOptions}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
