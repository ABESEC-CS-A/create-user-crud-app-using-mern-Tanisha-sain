import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ViewUser from './components/ViewUser'

const App = () => {
  return (
    <div>
      <Header />
      <ViewUser />
      <Footer />
    </div>
  )
}

export default App