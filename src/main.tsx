import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Home from './routes/Home.tsx';
import Admin from './routes/Admin/Admin.tsx';

const router = createBrowserRouter([
  {
    path: "/qr-code-tattoo",
    element: <App/>,
    children: [
      {
        path: "/qr-code-tattoo",
        element: <Home />
      },
      {
        path: "/qr-code-tattoo/admin",
        element: <Admin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
