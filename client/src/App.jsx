import Home from "./Pages/Home"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Service from "./Pages/Service"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./Pages/Login"
import Error from "./Pages/Error"
import {Logout} from "./Pages/Logout"

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/service" element = {<Service/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path="/logout" element = {<Logout/>}/>
      <Route path="/*" element = {<Error/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
