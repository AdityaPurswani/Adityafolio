import {BrowserRouter} from 'react-router-dom'
import {About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Publications from './components/Publications'

const App = () => {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Education />
      <Works />
      <Publications />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
