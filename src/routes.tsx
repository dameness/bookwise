import { createBrowserRouter } from 'react-router-dom';
import { AppWrapper } from './components/appWrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [{ path: 'login', element: <></> }],
  },
]);
