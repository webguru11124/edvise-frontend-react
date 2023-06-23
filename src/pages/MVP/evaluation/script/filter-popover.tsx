import { useState, FC, useEffect } from 'react';
import { Toggle } from '../../../../components/Toggle';
import Select, { IOption } from '../../../../elements/Select';

import { FilterPopoverProps } from '../evaluation.interface';
import { speakerOptions, filterblooms } from '../utils';

const FilterPopover: FC<FilterPopoverProps> = ({
  applyFilters,
  close,
  filters,
  handleFilterChange,
  resetFilters
}) => {
  const initialState = {
    filterBySpeaker: filters.filterBySpeaker,
    filterByCategory: filters.filterByCategory,
    showOnlyQuestion: filters.showOnlyQuestion,
    ShowOnlyOATR: filters.ShowOnlyOATR,
    ShowOnlyOWN: filters.ShowOnlyOWN,
    ShowOnlyNotes: filters.ShowOnlyNotes
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const upstate = {
      filterBySpeaker: filters.filterBySpeaker,
      filterByCategory: filters.filterByCategory,
      showOnlyQuestion: filters.showOnlyQuestion,
      ShowOnlyOATR: filters.ShowOnlyOATR,
      ShowOnlyOWN: filters.ShowOnlyOWN,
      ShowOnlyNotes: filters.ShowOnlyNotes
    };
    setState(upstate);
  }, [
    filters.filterBySpeaker,
    filters.filterByCategory,
    filters.ShowOnlyOATR,
    filters.showOnlyQuestion,
    filters.ShowOnlyOWN,
    filters.ShowOnlyNotes
  ]);

  const onSaveFilter = () => {
    close();
    applyFilters();
  };

  const { ShowOnlyOATR, showOnlyQuestion, ShowOnlyOWN, ShowOnlyNotes } = state;

  const [speakerOption, setSpeakerOption] = useState(speakerOptions[0]);
  const onChangeSpeakerOption = (t: IOption) => {
    setSpeakerOption(t);
    handleFilterChange(
      {
        id: t.id,
        label: t.label
      },
      'filterBySpeaker'
    );
  };

  const [filterBloom, setFilterBloom] = useState(filterblooms[0]);
  const onChangeFilterBloomOption = (t: IOption) => {
    setFilterBloom(t);
    handleFilterChange({ id: t.id, label: t.label }, 'filterByCategory');
  };

  return (
    <div className='bg-white p-5 rounded-lg shadow-lg text-left'>
      <div className='relative p-3' style={{ minWidth: 300 }}>
        <div className='text-gray-500 text-lg'>Filter</div>
        <div className='flex items-center mt-3'>
          <span className='mr-2 w-32'>Speaker</span>
          <div className='flex-1'>
            <Select
              options={speakerOptions}
              value={speakerOption}
              onChange={onChangeSpeakerOption}
            />
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <span className='mr-2 w-32'>Learning Type</span>
          <div className='flex-1'>
            <Select
              options={filterblooms}
              value={filterBloom}
              onChange={onChangeFilterBloomOption}
            />
          </div>
        </div>
        <div className='mt-3'>
          {showOnlyQuestion.display && (
            <div className='flex justify-between mt-3'>
              <label className='mr-2'>Show Only Question</label>
              <Toggle
                color='skyblue'
                checked={showOnlyQuestion.id}
                onChange={(checked) => {
                  handleFilterChange(
                    { id: checked, display: showOnlyQuestion.display },
                    'showOnlyQuestion'
                  );
                }}
              />
            </div>
          )}
          {ShowOnlyOATR.display && (
            <div className='flex justify-between mt-3'>
              <label className='mr-2'>
                Show Only Objects Attached to Rubric
              </label>
              <Toggle
                color='skyblue'
                checked={ShowOnlyOATR.id}
                onChange={(checked) => {
                  handleFilterChange(
                    { id: checked, display: ShowOnlyOATR.display },
                    'ShowOnlyOATR'
                  );
                }}
              />
            </div>
          )}
          {ShowOnlyOWN.display && (
            <div className='flex justify-between mt-3'>
              <label className='mr-2'>Show Only Objects with Notes</label>
              <Toggle
                color='skyblue'
                checked={ShowOnlyOWN.id}
                onChange={(checked) => {
                  handleFilterChange(
                    { id: checked, display: ShowOnlyOWN.display },
                    'ShowOnlyOWN'
                  );
                }}
              />
            </div>
          )}
          <div className='flex justify-between mt-3'>
            <label className='mr-2'>Show Notes Only</label>
            <Toggle
              color='skyblue'
              checked={ShowOnlyNotes.id}
              onChange={(checked) => {
                handleFilterChange(
                  { id: checked, display: ShowOnlyNotes.display },
                  'ShowOnlyNotes'
                );
              }}
            />
          </div>
        </div>
        <div className='w-full mt-6 flex justify-between'>
          <button
            onClick={onSaveFilter}
            className='bg-white mr-4 justify-center float-right w-16 h-9 p-1 border rounded flex text-black hover:bg-neutral-200 active:bg-white'
          >
            Save
          </button>
          <button
            onClick={resetFilters}
            className='bg-white mr-4 justify-center float-right w-16 h-9 p-1 border rounded flex text-black hover:bg-neutral-200 active:bg-white'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopover;
