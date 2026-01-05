import './App.css'
import Footer from './components/common/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';

const MainFunction = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
