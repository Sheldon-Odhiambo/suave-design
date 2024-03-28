import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="faqs" element={<Faqs/>}/>
<Route path="footer" element={<Footer/>}/>





</Routes>

</>


  )
}

export default App