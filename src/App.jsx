import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Layout from "./Components/Layout"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Album from "./Pages/Album"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout />}>
              <Route index element = {<Home/>} />
              <Route path = '/about' element = {<About/>} />
              <Route path = '/projects' element = {<Projects/>}/>
              <Route path = '/album' element = {<Album/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

