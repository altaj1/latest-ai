import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router}/>
      
  
  </React.StrictMode>
)
