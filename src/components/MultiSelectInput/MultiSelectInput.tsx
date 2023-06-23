import React, {
  KeyboardEventHandler,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null
};

export interface MultiSelectInputOption {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label
});

type MultiSelectInputProps = {
  setSelectedValues: React.Dispatch<
    React.SetStateAction<readonly MultiSelectInputOption[]>
  >;
};

const MultiSelectTextInput = forwardRef(
  ({ setSelectedValues }: MultiSelectInputProps, multiSelectInputRef) => {
    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState<readonly MultiSelectInputOption[]>(
      []
    );

    useImperativeHandle(multiSelectInputRef, () => ({
      resetValues() {
        setValue([]);
      }
    }));

    const handleKeyDown: KeyboardEventHandler = (event) => {
      if (!inputValue) return;
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          setValue((prev) => [...prev, createOption(inputValue)]);
          setInputValue('');
          event.preventDefault();
          break;
        default:
      }
    };

    useEffect(() => {
      if (value.length) {
        setSelectedValues(value);
      }
    }, [value]);

    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder='Enter email address'
        value={value}
        className='p-1'
        styles={{
          control: (styles) => ({
            ...styles,
            border: 'none',
            ':hover': { borderColor: 'transparent' },
            ':active': { borderColor: 'transparent' }
          })
        }}
      />
    );
  }
);

export default MultiSelectTextInput;
