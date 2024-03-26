import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'

const App = () => {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/service" element={<Service/>}/>





</Routes>
</>


  )
}

export default App
