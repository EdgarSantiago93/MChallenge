import LoginRegister from '@mind/Pages/Login';
import ReadUsers from '@mind/Pages/Users/Partials/Read';
import UserProfile from '@mind/Pages/UserProfile';
import TeamProfile from '@mind/Pages/TeamProfile';
import ReadTeams from '@mind/Pages/Teams/Partials/Read';
import ReadAccounts from '@mind/Pages/Accounts/Partials/Read';
import LogPage from '@mind/Pages/Log';
import { CLIENT_ROUTES } from '@mind/utils/client_routes';
import {
  createBrowserRouter,
} from "react-router-dom";

import { Profiler } from 'react';


const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.LOGIN,
    element: <LoginRegister/>,
    ErrorBoundary: () => <div>error amigi</div>,
  },
  {
    path: CLIENT_ROUTES.HOME,
    element: <LoginRegister />,
  },
  {
    path: CLIENT_ROUTES.USERS,
    element: <ReadUsers />,
  },
  {
    path: `${CLIENT_ROUTES.USERS}/:id`,
    element: <UserProfile />,
  },
  {
    path: `${CLIENT_ROUTES.TEAMS}`,
    element: <ReadTeams />,
  },  
  {
    path: `${CLIENT_ROUTES.TEAMS}/:id`,
    element: <TeamProfile />,
  },
  {
    path: `${CLIENT_ROUTES.ACCOUNTS}`,
    element: <ReadAccounts />,
  },  
  
  {
    path: `${CLIENT_ROUTES.LOG}`,
    element: <LogPage />,
  },

]);

export default router;