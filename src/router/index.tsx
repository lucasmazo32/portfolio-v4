import { createBrowserRouter } from 'react-router-dom'
import { HomePage, MainLayout } from './lazyComponents'

// Routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <HomePage /> }],
  },
])
