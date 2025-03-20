import { Icon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  Icon: Icon;
  title: string;
  to: string;
  selected?: boolean;
}

export const NavigationItem = ({
  Icon,
  title,
  to,
  selected = false,
}: NavigationItemProps) => {
  return (
    <Link
      to={to}
      className={`${
        selected ? 'text-gray-100' : 'text-gray-400'
      } flex items-center gap-3 p-2 hover:text-gray-100`}
    >
      <div
        className={`${
          selected ? 'bg-purple-100' : 'bg-transparent'
        } w-1 h-6 rounded-sm`}
      />

      <Icon className='w-[26px] h-[26px] min-w-[26px] min-h-[26px] ml-1' />

      <h1 className={`${selected ? 'font-semibold' : ''} text-lg`}>{title}</h1>
    </Link>
  );
};
