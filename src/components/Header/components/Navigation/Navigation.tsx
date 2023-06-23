import { SvgIconComponent } from '@mui/icons-material';

export type NavProps = {
  id: number;
  label: string;
  icon: SvgIconComponent;
  active: boolean;
};

const Navigation: React.FC<{ navs: NavProps[] }> = ({ navs }) => {
  return (
    <ul className='flex divide-x gap-x-5 px-5 border-l-4'>
      {navs.map((nav) => (
        <li key={nav.id} className='flex gap-x-2 items-center'>
          <>
            <nav.icon />
            <span>{nav.label}</span>
          </>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
