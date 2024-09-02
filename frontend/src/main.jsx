import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import routes from './routing/routes';

library.add(fas);
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
