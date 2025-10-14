import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Hom from './Components/Home/Hom.jsx'
import Loging from './Components/Loging/Loging.jsx'
import Register from './Components/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true,
        Component:Hom,
      },
      {
        path:"/loging",
        Component:Loging
      },
     {
       path:'/register',
       Component: Register
     }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
