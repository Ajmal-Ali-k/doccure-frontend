import { Sidebar } from 'flowbite-react'
import React from 'react'
import {Routes,Route} from "react-router-dom"

function AdminRoutes() {
  return (
    <div>
    <Routes>
        
      <Route path='/asidebar' element={<Sidebar/>}></Route>
    </Routes>
      
    </div>
  )
}

export default AdminRoutes
