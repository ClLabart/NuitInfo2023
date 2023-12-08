import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  // redirect,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import HomePage from './pages/Home.jsx';
import About from "./pages/About.jsx";
// import Error from './component/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/*",
      //   element: redirect("/"),
      // }  
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
