

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-heading">Campus Market</h2>
      
      <div className="nav-right">
        <input type="text" placeholder="Search for items..." className="nav-searchbar" />
        <a href="#" className="nav-btn">Sell</a>
        <a href="#" className="nav-btn">Profile</a>
        <a href="#" className="nav-btn">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
