import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Layout from "./components/Layout"
import About from "./Pages/About"
import Brand from "./Pages/Brand"
import Projects from "./Pages/Projects"
import Contacts from "./Pages/Contacts"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout />}>
              <Route path = "/brand"  element = {<Brand />} />
              <Route path = '/about' element = {<About/>} />
              <Route path = '/projects' element = {<Projects/>}/>
              <Route path = '/contacts' element = {<Contacts />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

