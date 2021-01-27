import  './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Aqua Keeping Culture</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Products">Products</a>
        <a href="/Contact">Contact</a>
        {/* <a href="/">New Blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
