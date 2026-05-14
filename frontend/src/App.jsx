import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import AddUser from './components/AddUser.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import UserList from './components/UserList.jsx'
import RootLayout from './components/RootLayout.jsx'
function App() {
  const routeObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
    {
      path: '',
      element: <Home />,
    },
    {
      path: "userslist",
      element:< UserList />
    },
    {
      path: "adduser",
      element:<AddUser/>
    },
    {
      path: "user",
      element:<User />
    },
  ]}
    
  ])
  return <RouterProvider router={routeObj} />
}

export default App;