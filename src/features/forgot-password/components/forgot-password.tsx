import { Button } from '../../../components/Button';
import { LockBig, MailBig } from '../../../components/Icons';
import { Logo } from '../../../components/Sidebar/SidebarLogo';
import { TextField } from '../../../components/TextField';
import { ForgotPasswordProps, ResetPasswordStep } from '../types';

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ step }) => {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <div className='pl-[125px] pt-[45px] w-full max-md:mb-4 max-md:px-0 max-md:flex max-md:justify-center'>
        <Logo />
      </div>

      <div className='flex-1 flex items-center'>
        <div className='border border-neutral-200 bg-netural-50 text-center w-[650px] px-[100px] py-[96px] rounded-lg flex items-center flex-col max-md:w-[400px] max-md:px-4'>
          <div className='bg-skyblue-100 p-10 w-fit rounded-full'>
            {step === ResetPasswordStep.CONFIRM_MAIL ? (
              <MailBig />
            ) : (
              <LockBig />
            )}
          </div>

          <div className='mt-8'>
            <h3 className='font-bold text-3xl text-neutral-800 leading-[55px]'>
              {step === ResetPasswordStep.SEND_MAIL
                ? 'Reset your password'
                : step === ResetPasswordStep.CONFIRM_MAIL
                ? 'Check your email'
                : 'Choose new password'}
            </h3>
            <h4 className='text-neutral-500 text-base mt-1'>
              {step === ResetPasswordStep.SEND_MAIL
                ? 'Enter the email associated with your Edvise account'
                : step === ResetPasswordStep.CONFIRM_MAIL
                ? "We've sent email to example@gmail.com with instructions to reset your password"
                : 'You need to create a new password to log in your account'}
            </h4>
          </div>
          {step === ResetPasswordStep.SEND_MAIL && (
            <div className='w-full'>
              <div className='mt-8 w-full'>
                <TextField type='text' placeholder='Email Address' />
              </div>
              <div className='mt-8 w-full'>
                <Button shape='round' text='Continue' width='fit-parent' />
              </div>
            </div>
          )}
          {step === ResetPasswordStep.CONFIRM_MAIL && (
            <div className='w-full mt-9'>
              <a
                className='text-base leading-5 text-skyblue-500 cursor-pointer hover:text-skyblue-600 active:text-skyblue-500'
                href='https://www.google.com'
              >
                Resend Email
              </a>
            </div>
          )}

          {step === ResetPasswordStep.RESET_PASSWORD && (
            <div className='w-full mt-8'>
              <div className='w-full'>
                <TextField type='password' placeholder='New Password' />
              </div>
              <div className='w-full mt-4'>
                <TextField type='password' placeholder='Retype Password' />
              </div>
              <div className='mt-8 w-full'>
                <Button
                  shape='round'
                  text='Change Password'
                  width='fit-parent'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
