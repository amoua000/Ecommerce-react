import Navbar from "./components/Navbar/Navbar";
// import Home from './Home; '
// import Slide from "./components/Slide/Slide";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Products from './components/Product/Product';
import Form from './components/Form/FormSignup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component ={Home}/>
        </Switch>
        <Switch>
        <Route path="/products" exact component ={Products}/>
        </Switch>
        <Switch>
        <Route path="/contact" exact component ={Form}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
