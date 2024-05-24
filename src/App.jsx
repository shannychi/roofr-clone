import Navbar from './component/navbar'
import Footer from './component/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home'


function App() {


  return (
    <>
     <Navbar className=" fixed"/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
     <Footer/>
    </>
  )
}

export default App
