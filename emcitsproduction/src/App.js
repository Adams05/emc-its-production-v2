import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/index';
import Contact from './components/pages/Contact';
import Cloud from './components/pages/Cloud';
import Security from './components/pages/Security';
import Servers from './components/pages/Servers';
import Systems from './components/pages/Systems';
import Wireless from './components/pages/Wireless';
import Cabling from './components/pages/Cabling';
import SecurityCameras from './components/pages/SecurityCameras';

// Main app component
function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/cloud' element={<Cloud />} />
          <Route path='/security' element={<Security />} />
          <Route path='/servers' element={<Servers />} />
          <Route path='/systems' element={<Systems />} />
          <Route path='/wireless' element={<Wireless />} />
          <Route path='/cabling' element={<Cabling />} />
          <Route path='/securitycameras' element={<SecurityCameras />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
