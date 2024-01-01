import { useState } from 'react'
import './App.css'
import CreateUserView from './component/CreateUser'
import { Route, Routes } from 'react-router-dom'
import ViewUsers from './component/ViewUsers'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<ViewUsers/>} />
      <Route path='/create' element={<CreateUserView/>}/>
     </Routes>
     </>
  )
}

export default App
