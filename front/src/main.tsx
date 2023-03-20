import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginRegister from './Pages/Login';
import ReadUsers from './Pages/Users/Partials/Read';
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginRegister/>,
  },
  {
    path: "/app",
    element: <LoginRegister/>,
  },
  {
    path: "/app/users",
    element: <ReadUsers/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={{primaryColor:'gray',primaryShade:7}}>
      <ModalsProvider>
      <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
);
