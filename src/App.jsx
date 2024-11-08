import React from 'react'


import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Layout from './PAGES/Layout'
import Home from './PAGES/Home'
import NotFound from './PAGES/NAVBAR/NotFound'
import CreateCourse from './COMPONENTS/COURSES/CreateCourse'
import AllCourses from './COMPONENTS/COURSES/AllCourses'
import CourseDetails from './COMPONENTS/COURSES/CourseDetails'
import EditCourse from './COMPONENTS/COURSES/EditCourse'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        children:[
          {
            index:true,
            element:<AllCourses></AllCourses>
          },
          {
            path:'Create-course',
            element:<CreateCourse></CreateCourse>
          },
          {
            path:":id",
            element:<CourseDetails></CourseDetails>,
          },
          {
            path:"edit/:id",
            element:<EditCourse></EditCourse>
          }
          
          
        ]

      },

      {
        path:'*',
        element:<NotFound></NotFound>,
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App