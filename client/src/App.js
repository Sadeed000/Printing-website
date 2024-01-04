import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes , Route } from 'react-router-dom'
import Home from './component/pages/Home';
import About from './component/pages/About';
import OurWork from './component/pages/OurWork';
import Quote from './component/pages/Quote';
import Services from './component/pages/Services';
import Contact from './component/pages/Contact';
import Register from './component/pages/Register';
import Navbar from './component/pages/Navbar';
import Footer from './component/pages/Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
         <Route path = '/' Component={Home} />
         <Route path = '/about' Component={About} />
         <Route path = '/services' Component={Services} />
         <Route path = '/contact' Component={Contact} />
         <Route path = '/quote' Component={Quote} />
         <Route path = '/ourwork' Component={OurWork}/>
         <Route path = '/register' Component={Register}/>
         <Route path = '*' Component={Error} />  

      </Routes>
      <Footer />
    </Router>
  )
}

export default App