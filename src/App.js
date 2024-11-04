import React from 'react'
import ListCourses from './pages/ListCourses'
import AddCourses from './pages/AddCourses'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AddNewList from './pages/AddNewList'
function App() {
  return (
    <main className="maincontainer">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ListCourses />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/addnewlist" element={<AddNewList />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
