import { ChartLineUp } from '@phosphor-icons/react';
import { NavigationItem } from './components/ui/navigationItem';

export const App = () => {
  return (
    <div className='bg-black space-y-2'>
      <NavigationItem title='Computação' Icon={ChartLineUp} to='' />
      <NavigationItem title='Computação' selected Icon={ChartLineUp} to='' />
      <NavigationItem title='Computação' Icon={ChartLineUp} to='' />
    </div>
  );
};
