import { ButtonColor } from 'Types/form';
import { Button } from '../../../components/Button';
import { Logo } from '../../../components/Sidebar/SidebarLogo';
import { TextField } from '../../../components/TextField';
import LinkButton from '../../../elements/LinkButton';

const Login: React.FC = () => {
  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex-1 flex flex-col py-12 px-10'>
        <div className='flex-1'>
          <Logo />
        </div>
        <div className='w-[420px] flex items-center flex-col ml-auto mr-auto flex-3'>
          <h3 className='text-3xl font-bold text-neutral-800 leading-[3.5rem] mb-[60px]'>
            Log in to Edvise
          </h3>
          <div className='w-full'>
            <TextField type='text' placeholder='Email' />
          </div>
          <div className='mt-4 w-full'>
            <TextField type='password' placeholder='Password' />
          </div>
          <div className='mt-5 w-full flex justify-between'>
            <span className='flex items-center'>
              <input
                type='checkbox'
                className='rounded-md text-skyblue-400 focus:ring-0 focus:ring-offset-0'
              />{' '}
              <span className='text-neutral-600 ml-1'>Remember me</span>
            </span>
            <LinkButton to='/forgot-password' color={ButtonColor.DEFAULT}>
              Forgot password?
            </LinkButton>
          </div>

          <div className='mt-9 w-full'>
            <Button shape='round' text='Sign in' width='fit-parent' />
          </div>
        </div>
        <div className='flex-1 w-full flex items-end'>
          <h4 className='text-base text-neutral-600 w-full text-center'>
            Don&apos;t have an account?{' '}
            <a className='text-neutral-900 font-bold' href='https://google.com'>
              Register Now
            </a>
          </h4>
        </div>
      </div>

      <div className='flex-1 p-4'>
        <div className='bg-skyblue-50 w-full h-full flex justify-center items-center'>
          <img src='./images/login.png' className='w-[400px]' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Login;
