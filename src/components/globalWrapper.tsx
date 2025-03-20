import { Outlet } from 'react-router-dom';

export const GlobalWrapper = () => {
  return (
    <div className='p-5'>
      <Outlet />
    </div>
  );
};
