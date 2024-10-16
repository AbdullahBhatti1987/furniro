import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

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
        <Route/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
