import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages'

import './i18n'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '*',
    element: <Navigate to='/home' replace />
  }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
