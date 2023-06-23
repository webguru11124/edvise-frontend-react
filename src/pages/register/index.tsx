import SignUpForm from 'Components/SignUpForm';
import EdviseLogo from 'Elements/EviseLogo';
import signUpPresentationBg from '../../assets/signup-presentation-bg.png';
import signUpCharacter from '../../assets/signup-character.png';

const SignUpPage: React.FC = () => {
  return (
    <div className='md:grid grid-cols-2 h-screen bg-white overflow-hidden'>
      <div className='flex flex-col items-center gap-y-10 pt-16 overflow-scroll'>
        <div className='w-full px-20'>
          <EdviseLogo className='float-left' />
        </div>
        <SignUpForm
          title='Create your account'
          subTitle='Enter The Fields Below To Get Started!'
        />
      </div>

      <div className='relative overflow-hidden hidden md:block'>
        <img
          src={signUpPresentationBg}
          alt='presentation'
          className='h-full w-full'
        />
        <div className='h-full w-full absolute inset-0 flex items-center justify-center'>
          <img
            src={signUpCharacter}
            alt='presentation'
            className='animate-float h-[600px] w-[520px]'
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
