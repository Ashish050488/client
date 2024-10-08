import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import EditPost from './pages/EditPost'
import UserProfile from './pages/UserProfile';
import CreatePost from './pages/CreatePost'
import DeletePost from './pages/DeletePost'
import Dashboard from './pages/Dashboard'
import CategoryPosts from './pages/CategoryPosts'
import Authors from './pages/Authors'
import AuthorPost from './pages/AuthorPost'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<Home/>},
      {path:'/posts/:id',element:<PostDetails/>},
      {path:'/register',element:<Register/>},
      {path:'/login',element:<Login/>},
      {path:'/profile/:id',element:<UserProfile/>},
      {path:'/authors',element:<Authors/>},
      {path:'/create',element:<CreatePost/>},
      {path:'/post/categories/:category',element:<CategoryPosts/>},
      {path:`/posts/:id/edit`,element:<EditPost/>},
      {path:'/posts/:id/delete',element:<DeletePost/>},
      {path:'/posts/users/:id',element:<AuthorPost/>},
      {path:'/myposts/:id',element:<Dashboard/>},
      {path:'/logour',element:<Logout/>},
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

