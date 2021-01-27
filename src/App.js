import Navbar from './components/Navbar/Navbar';
import Home from './Home'; 
import Slide from './components/Slide/Slide';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero/Hero';


function App() {
  

  return (
    <Router>
     <Navbar /> 
    <>
      <Hero />
      <div className="content">
        <Slide />
      </div>
    </>
    </Router>
  );
}

export default App;
