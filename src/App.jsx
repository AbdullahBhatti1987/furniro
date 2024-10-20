import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<Auth/>}>
        <Route path={'login'} element={<Login/>}/>
        <Route path={'signup'} element={<Signup/>}/>
      </Route>
      <Route element={<Dashboard />} >
        <Route path={'/'} element={<Home/>} />
        <Route path={'/shop'} element={<Shop/>} />
        <Route path={'/shop/:id'} element={<SingleProduct/>} />
        <Route path={'/blog'} element={<Blog/>} />
        <Route path={'/about'} element={<About/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path={'/cart'} element={<Cart/>} />
        <Route path={'/checkout'} element={<CheckOut/>} />
        <Route/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
