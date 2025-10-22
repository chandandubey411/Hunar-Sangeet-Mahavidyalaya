import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import Spotlight from './components/Spotlight'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import TimingandLocation from './components/TimingandLocation'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
        <Courses/>
        <Gallery/>
        <Footer/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <AboutUs/>
        <Footer/>
      </div>
    },
    {
      path:"/courses",
      element: 
      <div>
        <Navbar/>
        <Courses/>
        <Footer/>
      </div>
    },
    {
      path:"/spotlight",
      element: 
      <div>
        <Navbar/>
        <Spotlight/>
        <Footer/>
      </div>
    },
    {
      path:"/gallery",
      element: 
      <div>
        <Navbar/>
        <Gallery/>
        <Footer/>
      </div>
    },
    {
      path:"/contactUs",
      element: 
      <div>
        <Navbar/>
        <ContactUs/>
        <Footer/>
      </div>
    },
    {
      path:"/timingandLocation",
      element: 
      <div>
        <Navbar/>
        <TimingandLocation/>
        <Footer/>
      </div>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
