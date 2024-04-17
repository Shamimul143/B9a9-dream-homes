import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import FirebaseProvider from './firebaseProvider/FirebaseProvider.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import HomeDetails from './components/HomeDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/home/:id",
        element: <HomeDetails></HomeDetails>,
        loader: () => fetch("/home.json")
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
