import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/errors/not-found';
import MainLayout from './layout/main-layout';
import TaskPage from './pages/task/tasks';
import UserPage from './pages/user/users';
import SchedulerPage from './pages/scheduler/schedulers';

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
