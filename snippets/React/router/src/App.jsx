import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const router = createBrowserRouter([
          {
              path: '/',
              element: <><Navbar/><Home /></>
          },
          {
              path: '/about',
              element: <><Navbar/><About /></>
          },
          {
              path: '/contact',
              element: <><Navbar/><Contact /></>
          }
      ])

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
