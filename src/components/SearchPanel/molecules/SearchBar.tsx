import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface SearchBarProps {
  searchInput: string;
  handleSearchInput: (e: string) => void;
}

const SearchBar = ({ searchInput, handleSearchInput }: SearchBarProps) => {
  return (
    <div className='relative h-full border border-gray-300 rounded-md overflow-hidden'>
      <div className='absolute left-0 top-1/2 -translate-y-1/2 pl-2'>
        <SearchOutlinedIcon className='text-gray-400' />
      </div>
      <input
        type='text'
        placeholder='Search...'
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
        className='py-2 pl-10 pr-2 h-full w-[257px] bg-gray-50 outline-0 border-0'
      />
    </div>
  );
};

export default SearchBar;
