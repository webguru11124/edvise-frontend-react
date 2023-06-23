import { Disclosure } from '@headlessui/react';
import { BsFilterCircle, BsGrid, BsList } from 'react-icons/bs';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckDropdownMenu from 'Components/DropdownMenu/CheckDropdownMenu';
import { Button } from 'Components/Button';
import { useNavigate } from 'react-router-dom';
import { appLinks } from 'Utils/constants';
import { SearchBar } from './molecules';

export interface SearchPanelProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  handleSearchInput: (el: string) => void;
}

const dropdownOptions = [
  { id: 1, name: 'Select Item 1' },
  { id: 2, name: 'Select Item 2' },
  { id: 3, name: 'Select Item 3' },
  { id: 4, name: 'Select Item 4' },
  { id: 5, name: 'Select Item 5' },
  { id: 6, name: 'Select Item 6' },
  { id: 7, name: 'Select Item 7' }
];

const SearchPanel: React.FC<SearchPanelProps> = ({
  activeView,
  setActiveView,
  searchInput,
  handleSearchInput
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Disclosure
        as='section'
        aria-labelledby='filter-heading'
        className='grid items-center border-gray-200'
      >
        <div className='flex justify-between h-[52px] mt-8 mb-5'>
          <div className='flex items-center gap-x-4'>
            <SearchBar
              searchInput={searchInput}
              handleSearchInput={handleSearchInput}
            />

            {/* Filter button */}
            <Disclosure.Button className='group flex items-center font-medium text-gray-700 border-2 border-blue-500 p-3 rounded-xl'>
              <span className='mr-3'>Filter</span>
              <BsFilterCircle className='text-xl' />
            </Disclosure.Button>

            <div className='flex items-center'>
              <span
                className={`p-3 ${
                  activeView === 'grid'
                    ? 'text-gray-900 bg-gray-200'
                    : 'text-gray-400'
                } rounded-lg tex-xl`}
                role='button'
                onClick={() => setActiveView('grid')}
              >
                <BsGrid />
              </span>
              <span
                className={`p-2.5 ${
                  activeView === 'list'
                    ? 'text-gray-900 bg-gray-200'
                    : 'text-gray-400'
                } rounded-lg text-xl`}
                role='button'
                onClick={() => setActiveView('list')}
              >
                <BsList />
              </span>
            </div>
          </div>

          {/* Upload lesson button */}
          <Button
            text='Upload Lesson'
            color='primary'
            className='text-sm h-full space-x-2'
            onClick={() => navigate(appLinks.lessonUploads)}
            icon={<AddOutlinedIcon />}
          >
            <AddOutlinedIcon />
            Upload Lesson
          </Button>
        </div>
        <Disclosure.Panel className='mb-4 border-gray-200 py-3'>
          <div className='grid grid-cols-3 gap-10'>
            <CheckDropdownMenu label='Label 1' options={dropdownOptions} />
            <CheckDropdownMenu label='Label 2' options={dropdownOptions} />
            <CheckDropdownMenu label='Label 3' options={dropdownOptions} />
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};

export default SearchPanel;
