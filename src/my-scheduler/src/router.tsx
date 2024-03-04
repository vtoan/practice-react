import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/errors/NotFound';
import MainPageLayout from './layout/MainPageLayout';
import TaskPage from './pages/task/TaskPage';
import UserPage from './pages/user/Users';
import SchedulerPage from './pages/scheduler/Schedulers';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPageLayout />,
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
