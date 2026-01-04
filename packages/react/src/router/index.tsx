import { createBrowserRouter } from 'react-router'
import { lazy, Suspense, type ComponentType } from 'react'

type DynamicImport = () => Promise<{ default: ComponentType<unknown> }>

const withLazy = (cb: DynamicImport) => {
  const FC = lazy(cb)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FC />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: withLazy(() => import('../App')),
    children: [
      {
        path: '/',
        element: withLazy(() => import('../pages')),
      },
      {
        path: '/button',
        element: withLazy(() => import('../pages/button')),
      },
      {
        path: '/button',
        element: withLazy(() => import('../pages/button')),
      },
    ],
  },
])

export default router
