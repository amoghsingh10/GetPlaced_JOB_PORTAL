import { useState } from 'react'

import { createBrowserRouter,RouterProvider} from "react-router-dom";

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';


const appRouter = createBrowserRouter([
{
  path:'/',
  element:<Home/> 
},
{
  path:'/login',
  element:<Login/> 
},
{
  path:'/browse',
  element:<Browse/> 
},
{
  path:'/Jobs',
  element:<Jobs/> 
},
{
  path: "/description/:id",
  element:<JobDescription/>
},
{
  path:'/signup',
  element:<Signup/> 
},
{
  path: "/profile",
  element: <Profile />
}
])
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
    <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default App
