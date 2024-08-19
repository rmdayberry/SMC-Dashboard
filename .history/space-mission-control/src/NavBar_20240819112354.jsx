import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#all" className="nav-link">
            {" "}
            All
          </a>
        </li>
        <li className="nav-item">
          <a href="#planned" className="nav-link">
            {" "}
            Planned
          </a>
        </li>
        <li className="nav-item">
          <a href="#action" className="nav-link">
            {" "}
            Action
          </a>
        </li>
        <li className="nav-item">
          <a href="#completed" className="nav-link">
            {" "}
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
