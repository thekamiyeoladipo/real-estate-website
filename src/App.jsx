import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/projects'
import BackToTopButton from './components/BackToTOpButton'

const App = () => {
  return (
   <div className='w-full overflow-hidden'>
    <Header />
    <About />
    <Projects />
   </div>
  )
}
export default App
