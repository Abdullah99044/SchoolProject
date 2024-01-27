 
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs.tsx'
import Facilities from './Pages/Facilities.tsx'
import Admissions from './Pages/Admissions.tsx'


function App() {
   

  return (

    

    <>

      <header>

          <nav>
            <ul>
              <li><h1> Dordrecht school </h1></li>
              <li><Link to={"/"} > Home </Link></li>
              <li><Link to={"/Facilities"} > Facilities </Link></li>
              <li><Link to={"/Admissions"} > Admissions </Link></li>
              <li><Link to={"/Contact-Us"} > Contact-Us </Link></li>
            </ul>
          </nav>

      </header>

      <main> 

        <Routes>
            <Route path='/'  element={<Home />} /> 
            <Route path='/Contact-Us' element={<ContactUs />} />
            <Route path='/Facilities' element={<Facilities />} />
            <Route path='/Admissions' element={<Admissions />} />
        </Routes>

      </main>

      <footer>

      </footer>

    </>
  )
}

export default App
