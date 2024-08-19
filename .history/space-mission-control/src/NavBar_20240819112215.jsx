import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#all" className="nav-link"> All</li>
        <li className="nav-item"><a href="#planned" className="nav-link"> Planned</li>
        <li className="nav-item"><a href="#action" className="nav-link"> Action</li>
        <li className="nav-item"><a href="#completed" className="nav-link"> Completed</li>
      </ul>
    </nav>
  );
}
export default NavBar;
