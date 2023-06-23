import { Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import { Plus } from 'react-feather';

import { CustomTagProps, Tag } from '../evaluation.interface';

const getTagStyle = (index: number) => {
  const colors = [
    'bg-[#FDF6B2] text-[#723B13]',
    'bg-[#DEF7EC] text-[#03543F]',
    'bg-[#E5EDFF] text-[#42389D]',
    'bg-[#E5EDFF] text-[#42389D]'
  ];
  if (index > colors.length - 1) {
    index = Math.floor(index / colors.length - 1);
  }
  return colors[index];
};

interface TagProp {
  tag: Tag;
  index: number;
  removeTag: (tag: Tag) => void;
}

const TagItem: FC<TagProp> = ({ tag, index, removeTag }) => {
  return (
    <div
      className={`${getTagStyle(
        index
      )} flex gap-1 px-3 py-1 font-bold items-center rounded-md`}
    >
      {tag.label}
      <button
        className='custor-pointer'
        onClick={() => {
          removeTag(tag);
        }}
      >
        <Close fontSize='small' />
      </button>
    </div>
  );
};

const CustomTag: FC<CustomTagProps> = ({ customtags, handleCustomTags }) => {
  const initialState = {
    tags: customtags,
    newCustomTag: '',
    showAddCustomTagField: false
  };

  const [state, setState] = useState(initialState);

  const addCustomTag = () => {
    const upstate = { ...state };
    if (upstate.newCustomTag.length === 0) {
      return;
    }

    upstate.tags.push({
      value: upstate.newCustomTag,
      label: upstate.newCustomTag
    });

    upstate.newCustomTag = '';

    setState(upstate);
    handleCustomTags(upstate.tags);
  };

  const removeTag = (tag: Tag) => {
    const upstate = { ...state };
    const index = upstate.tags.findIndex((ctag) => ctag.value === tag.value);
    upstate.tags.splice(index, 1);
    setState(upstate);
    handleCustomTags(upstate.tags);
  };

  const onChangeCustomTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const upstate = { ...state };
    upstate.newCustomTag = event.target.value;
    setState(upstate);
  };

  const { tags, newCustomTag } = state;

  return (
    <>
      <div className='mt-4 rounded-lg border border-neutral-300 flex bg-white'>
        <input
          type='text'
          className='border-none flex-1 rounded-md'
          value={newCustomTag}
          onChange={onChangeCustomTag}
          placeholder='Custom Tag'
        />
        <button
          className='p-3 flex items-center text-neutral-500 hover:text-neutral-800 active:text-neutral-500'
          onClick={() => {
            addCustomTag();
          }}
        >
          <Plus className='mr-2' />
          Add Tag
        </button>
      </div>

      <div className='bg-white rounded-lg mt-1.5 p-3 flex gap-2 flex-wrap'>
        {tags.map((tag, index) => (
          <TagItem key={index} index={index} tag={tag} removeTag={removeTag} />
        ))}
        {tags.length === 0 && (
          <div className='w-full flex justify-center items-center font-bold text-xl text-neutral-300 py-8'>
            No tags.
          </div>
        )}
      </div>
    </>
  );
};

export default CustomTag;
