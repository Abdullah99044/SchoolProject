 
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs.tsx'
import Facilities from './Pages/Facilities.tsx'
 


function App() {
   

  return (

    

    <>

      <header>

          <nav>
            <h1> School website </h1>
            <ul>
              <li><Link to={"/"} > Home </Link></li>
              <li><Link to={"/Facilities"} > Facilities </Link></li>
              <li><Link to={"/Contact-Us"} > Contact-Us </Link></li>
            </ul>
          </nav>

      </header>

      <main> 

        <Routes>
            <Route path='/'  element={<Home />} /> 
            <Route path='/Contact-Us' element={<ContactUs />} />
            <Route path='/Facilities' element={<Facilities />} />
        </Routes>

      </main>

      <footer>

      </footer>

    </>
  )
}

export default App
