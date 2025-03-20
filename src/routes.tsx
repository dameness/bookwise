import { createBrowserRouter } from 'react-router-dom';
import { AppWrapper } from './components/appWrapper';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/home';
import { GlobalWrapper } from './components/globalWrapper';

export const router = createBrowserRouter([
  {
    element: <GlobalWrapper />,
    children: [
      {
        path: '/',
        element: <AppWrapper />,
        children: [{ index: true, element: <HomePage /> }],
      },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);
