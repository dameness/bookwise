import { Outlet } from 'react-router-dom';

export const AppWrapper = () => {
  return (
    <div className='p-5 border-amber-700'>
      <Outlet />
    </div>
  );
};
