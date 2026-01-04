import { Link, Outlet } from 'react-router'

function App() {
  return (
    <>
      <div>
        <Link to="/">Index</Link>
      </div>
      {/* Similar to vue-router <RouterView /> */}
      <Outlet />
    </>
  )
}

export default App
