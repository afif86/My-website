// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Contact from './Contact'
import handleViewport from 'react-in-viewport';
import { useState } from 'react';
import { NumContext } from './Numcontext/Numcontext';


function App() {
  
  const [num, setNum] = useState(1);
  
  
  return (
    <div className="container">
      <div className="page-wrapper">
        <NumContext.Provider value={{ number: num, setter: setNum }} >
          <Navbar />
          <Home />
          <Skills />
          <About />
          <Contact />
        </NumContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
