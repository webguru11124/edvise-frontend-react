import { FC, useEffect, useRef, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { Button } from '../../../../components/Button';
import { ConfirmModal } from '../../../../components/Modal';

export interface IFocusAreaOption {
  value: number;
  label: string;
}

export interface AddToFocusAreaProps {
  options: Array<IFocusAreaOption>;
  onAdd: (values: Array<IFocusAreaOption>) => void;
  selectedFocusAreas: Array<IFocusAreaOption>;
  onRemove: (values: Array<IFocusAreaOption>) => void;
  isLoading: boolean;
}

const AddToFocusArea: FC<AddToFocusAreaProps> = ({
  options,
  onAdd,
  selectedFocusAreas,
  onRemove,
  isLoading
}) => {
  const [selections, setSelections] =
    useState<Array<IFocusAreaOption>>(selectedFocusAreas);

  useEffect(() => {
    setSelections(selectedFocusAreas);
  }, [selectedFocusAreas]);

  const select = useRef(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [tempSelections, setTempSelections] = useState<Array<IFocusAreaOption>>(
    []
  );
  const [differences, setDifferences] = useState<Array<IFocusAreaOption>>([]);

  const toggleConfirmModal = () => {
    setConfirmOpen(!isConfirmOpen);
  };

  const handleChange = (newValue: MultiValue<IFocusAreaOption>) => {
    const difference: Array<IFocusAreaOption> = [];

    const newSelections: Array<IFocusAreaOption> = newValue.map((t) => ({
      value: t.value,
      label: t.label
    }));

    selections.forEach((x) => {
      const index = newSelections.findIndex(
        (s: IFocusAreaOption) => s.value === x.value
      );
      if (index === -1)
        difference.push({
          value: x.value,
          label: x.label
        });
    });
    if (difference.length) {
      toggleConfirmModal();
    }

    if (difference.length === 0) {
      setSelections(newSelections);
    } else {
      setTempSelections(newSelections);
      setDifferences(difference);
    }
  };

  const onClickAdd = () => {
    onAdd(
      selections.filter(
        (selection) =>
          selectedFocusAreas.filter((t) => t.value === selection.value)
            .length === 0
      )
    );
  };

  const onConfirm = () => {
    setSelections(tempSelections);
    toggleConfirmModal();
    onRemove(differences);
  };

  const onCancel = () => {
    toggleConfirmModal();
  };

  return (
    <div className='flex gap-2 w-full'>
      <div className='flex-1 w-[70%]'>
        <Select
          ref={select}
          options={options}
          className='h-full'
          isMulti
          value={selections}
          styles={{
            control: (base) => ({
              ...base,
              height: '100%'
            })
          }}
          onChange={handleChange}
          defaultValue={selectedFocusAreas}
        />
      </div>
      <div>
        <Button
          shape='round'
          text='Add'
          color='secondary'
          width='fit-parent'
          size='sm'
          className='text-neutral-300'
          onClick={onClickAdd}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>

      <ConfirmModal
        isOpen={isConfirmOpen}
        title='Remove From Focus Area'
        message='Are you sure want to remove from focus area?'
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddToFocusArea;
