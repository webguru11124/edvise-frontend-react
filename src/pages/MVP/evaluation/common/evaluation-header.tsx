import { FC } from 'react';
import { Avatar } from '../../../../components/Avatar';
import { LogoWithBackground, Share } from '../../../../components/Icons';

const EvaluationHeader: FC = () => {
  return (
    <div className='w-full bg-white px-12 py-4 flex'>
      <LogoWithBackground />

      <div className='ml-auto flex items-center'>
        <div className='mr-9'>
          <Share />
        </div>
        <div>
          <Avatar
            url='https://cdn-icons-png.flaticon.com/512/147/147144.png'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </div>
  );
};

export default EvaluationHeader;
