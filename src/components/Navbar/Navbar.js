import { Link } from 'react-router-dom';
import { FaFish, } from 'react-icons/fa';
import  './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="logo"><h1>Aqua Keeping Culture</h1>  <FaFish /> </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
