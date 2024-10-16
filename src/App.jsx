import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      {/* <Route path=''>
        <Route path='' />
        <Route path='' />
      </Route> */}
      <Route element={<Dashboard />} >
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
