import { lazy } from 'react'

// Pages
export const HomePage = lazy(() => import('../pages/Home'))
export const AboutPage = lazy(() => import('../pages/About'))

// Layouts
export const MainLayout = lazy(() => import('../layouts/Main'))
