import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';

import PrivateRoute from './components/routes/PrivateRoute';
import GuestRoute from './components/routes/GuestRoute';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import AuthProvider from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeProvider';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

import MyTranx from './components/MyTranx';
import AddTranx from './components/AddTranx';
import DetailsTranx from './components/DetailsTranx';
import UpdateTranx from './components/UpdateTranx';
import Goals from './components/Goals';
import HomePage from './pages/HomePage';
import Reports from './components/Reports';
// import Profile from './components/Profile';
import ProfilePage from './pages/ProfilePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {path: "/", element: <LandingPage></LandingPage>},
      {path: "/login", element: <GuestRoute><LoginPage></LoginPage></GuestRoute>},
      { path: "/register", element: <GuestRoute><RegisterPage></RegisterPage></GuestRoute> },
      
      { path: "/home", element: <PrivateRoute><HomePage></HomePage></PrivateRoute> },
      { path: "/my-transactions", element: <PrivateRoute><MyTranx></MyTranx></PrivateRoute> },
      { path: "/add-transaction", element: <PrivateRoute><AddTranx></AddTranx></PrivateRoute> },
      { path: "/goals", element: <PrivateRoute><Goals></Goals></PrivateRoute> },
      { path: "/reports", element: <PrivateRoute><Reports></Reports></PrivateRoute> },
      { path: "/profile", element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute> },
      { path: "/transaction/:id", element: <PrivateRoute><DetailsTranx /></PrivateRoute> },
      { path: "/transaction/update/:id", element: <PrivateRoute><UpdateTranx /></PrivateRoute> },
      { path: "*", element: <NotFoundPage /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)