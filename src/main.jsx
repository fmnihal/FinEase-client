import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {path: "/", element: <LandingPage></LandingPage>},
      {path: "/login", element: <LoginPage></LoginPage>},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)