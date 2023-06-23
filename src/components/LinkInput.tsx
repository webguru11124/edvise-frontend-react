import { useEffect, useRef, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

interface LinkInputProps {
  label: string;
  linkText: string;
  setLinkText: (el: string) => void;
}

export default function LinkInput({
  label,
  linkText,
  setLinkText
}: LinkInputProps) {
  const meetingLinkRef = useRef<HTMLAnchorElement>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleLinkClick = () => {
      const result = meetingLinkRef.current?.innerText.startsWith('https://');
      if (result) {
        window.open(meetingLinkRef.current?.innerText, '_blank');
        return;
      }
      setErrorMessage('Invalid URL');
    };
    meetingLinkRef.current?.addEventListener('click', handleLinkClick);
    return () => {
      meetingLinkRef.current?.removeEventListener('click', handleLinkClick);
    };
  }, [linkText]);

  const handleInput = (e: any) => {
    setLinkText(e.currentTarget.value);
    setErrorMessage('');
  };

  return (
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900 mt-4'>
        {label}
      </label>
      {/* <div className='relative mt-2 rounded-md shadow-sm'>
      <input
        type='url'
        {...register('meetingLink', {
          required: true
        })}
        onClick={handleClick}
        style={{ color: '#4DA3F9' }}
        id='meetingLink'
        value=''
        className='block py-3 w-full rounded-md border-0 text-blue-900 underline shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100'
      />
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
        <BsLink45Deg
          className='h-5 w-5 text-gray-400'
          aria-hidden='true'
        />
      </div>
    </div> */}
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div
          onInput={handleInput}
          className='block p-3 h-12 w-full rounded-md cursor-text overflow-hidden border-0 text-blue-900 underline shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100'
        >
          <a
            className='focus:outline-none h-12'
            contentEditable
            suppressContentEditableWarning
            ref={meetingLinkRef}
            href={linkText}
          >
            {linkText}
          </a>
        </div>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3'>
          <BsLink45Deg className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
      </div>
      <div className='text-sm text-critical-400'>{errorMessage || ''}</div>
    </div>
  );
}
