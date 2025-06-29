import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
   <div className='w-full overflow-hidden'>
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact /> 
    <Footer />
    <BackToTop />
   </div>
  )
}
export default App
