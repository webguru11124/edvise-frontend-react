import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'Elements/Button';
import { Input } from 'Elements/Form';
import LinkButton from 'Elements/LinkButton';
import { useUser } from 'Hooks/useUser';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ButtonColor, ButtonSize, FormProps } from 'Types/form';
import { CreateUserInput, signUpFormSchema } from 'Utils/validations';
import { UserType } from '../__generated/graphql';

const SignUpForm: React.FC<FormProps> = ({ title, subTitle }) => {
  const [params, setParams] = useState({
    inviteToken: '',
    organization: '',
    role: '',
    email: ''
  });

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setParams({
      inviteToken: searchParams.get('in_t') ?? '',
      organization: searchParams.get('organization') ?? '',
      role: searchParams.get('role') ?? '',
      email: searchParams.get('email') ?? ''
    });

    navigate(location.pathname);
  }, [searchParams]);

  const methods = useForm<CreateUserInput>({
    resolver: yupResolver(signUpFormSchema)
  });

  const { createUser, isCreatingUser, user } = useUser();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await createUser({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      type: UserType.Admin, // Needs to be removed
      organization_id: 1 // Needs to be removed
    });
  });

  if (user) navigate('/dashboard');

  return (
    <FormProvider {...methods}>
      <div className='w-full flex flex-col gap-y-7 justify-center my-10'>
        <div className='px-20 space-y-4'>
          <h3 className='text-3xl font-bold'>{`👋 ${title}`}</h3>
          <h4 className='text-slate-400'>{subTitle}</h4>
        </div>
        <form
          className='grid grid-cols-2 gap-3 px-5 lg:px-20 items-center mx-auto w-full'
          onSubmit={onSubmit}
        >
          <Input
            name='firstName'
            id='firstName'
            placeholder='First Name'
            className='col-span-2 lg:col-span-1'
          />
          <Input
            name='lastName'
            id='lastName'
            placeholder='Last Name'
            className='col-span-2 lg:col-span-1'
          />
          <Input
            name='email'
            id='email'
            placeholder='Email Address'
            readOnly
            defaultValue={params.email}
            className='col-span-2'
          />
          <Input
            name='organization'
            id='organization'
            placeholder='School'
            readOnly
            defaultValue={
              params.organization ? `Organization - ${params.organization}` : ''
            }
            className='col-span-2'
          />
          <Input
            name='role'
            id='role'
            placeholder='Role'
            readOnly
            defaultValue={params.role ? `Role - ${params.role}` : ''}
            className='col-span-2'
          />
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='col-span-2'
          />
          <Input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Confirm Password'
            className='col-span-2'
          />
          <Button
            size={ButtonSize.FULL}
            disabled={isCreatingUser}
            className='justify-center p-3 col-span-2'
          >
            {isCreatingUser ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
        <span className='text-center'>
          Already have an account?{' '}
          <LinkButton
            to='/login'
            size={ButtonSize.DEFAULT}
            color={ButtonColor.DEFAULT}
            className='font-semibold text-gray-700'
          >
            Sign In
          </LinkButton>
        </span>
      </div>
    </FormProvider>
  );
};

export default SignUpForm;
