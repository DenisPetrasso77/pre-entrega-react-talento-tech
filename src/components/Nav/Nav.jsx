import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/discos" onClick={closeMenu}>Discos</Link></li>
        <li><Link to="/remeras" onClick={closeMenu}>Remeras</Link></li>
        <li>
          <Link to="/carrito" onClick={closeMenu}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
