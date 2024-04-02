import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Title from './components/Title'
import NotFound from './components/NotFound'



const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/faqs" element={<Faqs/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="*" element={<NotFound/>}/>





</Routes>
<Footer/>
</>


  )
}

export default App
