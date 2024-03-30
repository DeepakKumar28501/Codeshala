import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import LoginForm from './Components/LoginForm';
import PostJobs from './pages/PostJobs/PostJobs';
import Myjobs from './pages/MyJobs/MyJobs';
import SalaryPage from './pages/SalartPage/SalaryPage';
import UpdateJob from './pages/UpdateJob/UpdateJob';
import Login from './Components/Login';

const router=createBrowserRouter(
 createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='post-job' element={<PostJobs/>} />
        <Route path='about' element={<About/>} />
        <Route path='loginform' element={<LoginForm/>} />
        <Route path='myjob' element={<Myjobs/>} />
        <Route path='salary' element={<SalaryPage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='edit-job/:id' element={<UpdateJob/>} loader={({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)} />
    </Route>
 )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
