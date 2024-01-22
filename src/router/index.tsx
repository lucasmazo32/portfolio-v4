import { createBrowserRouter } from "react-router-dom"
import { AboutPage, HomePage, MainLayout } from "./lazyComponents"
import { Suspense } from "react"

// Routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
])
