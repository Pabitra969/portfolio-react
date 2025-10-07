import React from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <About/>
      <Projects />
      <Contact />
    </>
  )
}

export default App