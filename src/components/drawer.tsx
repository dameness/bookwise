import { twMerge } from 'tailwind-merge';
import { NavigationItem } from './ui/navigationItem';
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface DrawerProps {
  className: string;
}

export const Drawer = ({ className }: DrawerProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center flex-col bg-gray-700 w-64 min-h-screen mr-8 rounded-xl px-4 pt-12 pb-8',
        className
      )}
    >
      <Link
        to='/'
        className='flex items-center gap-2 bg-gradient-horizontal text-gradient text-xl font-bold mb-8'
      >
        <img
          src='/assets/bookwise.svg'
          alt='Bookwise Icon'
          className='w-8 min-w-8'
        />
        BookWise
      </Link>

      <div>
        <NavigationItem to='/' Icon={ChartLineUp} title='Início' selected />
        <NavigationItem to='/' Icon={Binoculars} title='Explorar' />
      </div>

      <Link
        to='/login'
        className='mt-auto flex items-center gap-4 font-bold text-lg text-gray-100'
      >
        Fazer login{' '}
        <SignIn className='text-green-100 w-5 min-w-5 h-5 min-h-5' />
      </Link>
    </div>
  );
};
