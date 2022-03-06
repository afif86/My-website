// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Contact from './Contact'



function App() {
  

  return (
    <div className="container">
      <div className="page-wrapper">     
          <Navbar />
          <Home />
          <Skills />
          <About />
          <Contact />        
      </div>
      
    </div>
  );
}

export default App;
