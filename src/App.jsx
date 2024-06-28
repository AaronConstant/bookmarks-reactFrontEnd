import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Show from './Components/Show'
import New from './Components/New'
import Edit from './Components/Edit'
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path='/bookmarks'element={ <Home/> }/>
      <Route path='/about'element={ <About/> }/>
      <Route path='/bookmarks/new' element={ <New/> }/>
      <Route path='/bookmarks/:index' element={ <Show/> }/>
      <Route path='/bookmarks/:index/edit'element={<Edit />}/>
      </Routes>


    </div>
  )
}

export default App
