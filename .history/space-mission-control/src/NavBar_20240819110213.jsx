import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"> All</li>
        <li className="nav-item"> Planned</li>
        <li className="nav-item"> Action</li>
        <li className="nav-item"> Completed</li>
      </ul>
    </nav>
  );
}
export default NavBar;
