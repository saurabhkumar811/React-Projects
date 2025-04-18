import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/AboutUs.jsx'
import Contact from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github , {LoadGithub} from './components/Github.jsx'


// const router = createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact',
//       element:<Contact/>
//     }
//   ]
// }])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route  path='' element={<Home/>}/>
      <Route path='about'  element={<About/>}/>
      <Route path='contact'  element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route loader={LoadGithub} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
