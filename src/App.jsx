 import React from "react"
 import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Sidebar from "./Component/Sidebar"
import About from "./Component/About"
import Contact from "./Component/Contact"

function App(){ 
  return <>
   <BrowserRouter>
   <div className="container">
    <Sidebar />
    <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/*' element={<Navigate to='/about' />}/>
    </Routes>
    </div>
   </BrowserRouter>
    </>
}

export default App
