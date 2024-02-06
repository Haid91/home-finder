import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home type={'test'} />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/profiles/:profileId',
        element: <Profile />
      }, 
      {
        path: '/me',
        element: <Profile />
      }, // <-- This comma was missing
      {
        path: '/about',
        element: <About />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

