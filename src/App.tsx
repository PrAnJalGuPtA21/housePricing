import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/home/Home"
import Info from "./components/Info/Info"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
