import React from 'react'
import { RouterProvider } from 'react-router'
import appRouter from './routes/appRoutes'


const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App