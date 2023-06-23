import edviseLogo from '../assets/edviseLogo.png';

const EdviseLogo: React.FC<{ className?: string }> = ({ className }) => (
  <button className={`h-[33px] w-[109px] object-contain ${className}`}>
    <img src={edviseLogo} alt='' className='h-full w-full' />
  </button>
);

export default EdviseLogo;
