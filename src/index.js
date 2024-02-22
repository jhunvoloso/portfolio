import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import ProjectList from './pages/ProjectList';
import HireMe from './pages/HireMe';

const router = createHashRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/projects/',
    element: <ProjectList />
  },
  {
    path: '/projects/:id',
    element: <ProjectList />
  },
  {
    path: '/hire',
    element: <HireMe />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
