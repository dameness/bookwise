import { Outlet } from 'react-router-dom';
import { Drawer } from './drawer';

export const AppWrapper = () => {
  return (
    <div className='flex items-center sm:flex-row flex-col p-5'>
      <Drawer className='lg:flex hidden' />
      <Outlet />
    </div>
  );
};
