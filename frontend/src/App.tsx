import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeaderLayout } from './components/layouts/HeaderLayout'
import './App.css'
import { LandingPage } from './pages/landing/LandingPage';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeaderLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
