import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { WindowContextProvider, menuItems } from '@/lib/window'

import appIcon from '@/resources/build/icon.png'
import '@/lib/window/window.css'
import './styles/app.css'

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', handle: { pageTitle: 'Anasayfa' }, element: <Navigate to="/dashboard" replace /> },
      { path: '/profile', handle: { pageTitle: 'Profile' }, element: <Profile /> },
      { path: '/dashboard', handle: { pageTitle: 'Dashboard' }, element: <Dashboard /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <WindowContextProvider titlebar={{ title: 'App Name', icon: appIcon, menuItems }}>
    <RouterProvider router={router} />
  </WindowContextProvider>
)
