
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import EmployeesList from './Components/EmployeesList'
import NotFound from './Components/NotFound'
import AddEmployee from './Components/AddEmployee'

export default function App() {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path = "/" element = {<EmployeesList/>}/>
          <Route exact path = "/add" element = {<AddEmployee/>}/>
          <Route exact path="/employees/edit/:id" element={<AddEmployee />}/>
          
          <Route exact path = "*" element = {<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
  
}
