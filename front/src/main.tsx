import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import {
  RouterProvider,
} from "react-router-dom";
import { Notifications } from '@mantine/notifications';

import router from '@mind/utils/browser_router';

const emotionCache = createEmotionCache({ key: "mind" });


// const App = () => {
//   // useEffect(() => {
//   // }, []);
//   // const branch = matchRoutes(, location);

//   return (
 
//     );
// };



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      emotionCache={emotionCache}
      theme={{
        loader: "bars",
        primaryColor: "gray",
        primaryShade: 7
      }}>
      <ModalsProvider>
      <Notifications />
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
//  </React.StrictMode>,
);


