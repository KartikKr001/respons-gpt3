import { useState } from 'react'

import './App.css'
import Article from './components/article/Article'
import Cta from './components/cta/Cta'
import Brand from './components/brand/Brand'
import { Possibility,Header,Footer,WhatGPT,Blog,Features } from './containers'
import Navbar from './components/navbar/Navbar'

function App() {
  
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
