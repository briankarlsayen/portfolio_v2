import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProjectDetails } from './pages/ProjectDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLFormElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
