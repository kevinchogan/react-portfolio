export default function Nav({ links }) {
    return (
      <header className="navbar">
          <nav className="nav-container">
            <h1>Kevin Hogan</h1>
            <ul className="">
              {links.map((link) => link)}
            </ul>
          </nav>
      </header>
    );
  }
  