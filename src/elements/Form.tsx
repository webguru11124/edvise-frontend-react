import { SvgIconComponent } from '@mui/icons-material';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { classNames } from 'Utils/index';

export type FormProps = {
  name: string;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  icon?: SvgIconComponent;
  id: string;
  required?: boolean;
  validation?: RegisterOptions;
};

export type InputProps = FormProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const ErrorLabel = ({ error }: { error: string }) => {
  return error ? (
    <div className='mb-1 text-sm text-red-600'>{error}</div>
  ) : null;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  readOnly = false,
  disabled = false,
  validation,
  className = 'w-full',
  ...props
}) => {
  const { register, formState } = useFormContext();
  const { errors, touchedFields } = formState;
  const isTouched = touchedFields[name];

  const hasError = !!errors[name] && isTouched;

  return (
    <div className={`w-full ${className}`}>
      {props.icon && (
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <props.icon className='h-5 w-5 text-gray-500' />
        </span>
      )}
      <input
        {...register(id, validation)}
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        className={classNames(
          hasError
            ? 'border-red-300 focus:border-red-500'
            : 'border-gray-200 focus:border-blue-500',
          'transition-all mb-2 block h-13 w-full rounded p-3 focus:outline-0 focus:ring-0 disabled:opacity-50 bg-slate-50 placeholder:focus-within:text-slate-300 placeholder:text-slate-500',
          props.icon ? 'pl-10' : 'pl-3',
          readOnly ? 'text-gray-500' : ''
        )}
        {...props}
      />
      {hasError && <ErrorLabel error={errors[name]?.message as string} />}
    </div>
  );
};
