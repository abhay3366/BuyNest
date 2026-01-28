import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from './pages/Dashboard';
const App = () => {

 const router=createBrowserRouter([
  { 
    path:'/',
    element:(
      <Dashboard/>
    )
  }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App