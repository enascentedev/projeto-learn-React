// Header.jsx
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <strong>React Nutri</strong>
			<Link to="/about">NutriView</Link>
    </header>
  );
}

export default Header;