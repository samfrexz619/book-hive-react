import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeaderLayout } from './components/layouts/HeaderLayout';
import { LandingPage } from './pages/landing/LandingPage';
import { Demo } from './pages/demo/Demo';
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeaderLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/demo',
          element: <Demo />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
