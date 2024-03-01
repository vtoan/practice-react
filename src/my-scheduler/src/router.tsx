import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/errors/NotFound';
import MainLayout from './layout/MainLayout';
import TaskPage from './pages/task/Tasks';
import UserPage from './pages/user/Users';
import SchedulerPage from './pages/scheduler/Schedulers';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <TaskPage />,
      },
      {
        path: 'users',
        element: <UserPage />,
      },
      {
        path: 'schedulers',
        element: <SchedulerPage />,
      },
    ],
  },
]);
