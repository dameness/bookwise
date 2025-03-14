import { Icon } from '@phosphor-icons/react';

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
    // <Link to={to}>
    <div
      className={`${
        selected ? 'text-gray-100' : 'text-gray-400'
      } flex items-center gap-3 p-2 hover:text-gray-100`}
    >
      <div
        className={`${
          selected ? 'bg-purple-100' : 'bg-transparent'
        } w-1 h-6 rounded-sm`}
      />

      <Icon className='w-5 min-w-5 ml-1' />

      <h1 className={`${selected ? 'font-semibold' : ''} text-sm`}>{title}</h1>
    </div>
    // </Link>
  );
};
