import headerLogo from '../assets/header-logo.png';
import { navLinks } from '../data/content';
import './Header.css';

export default function Header() {
  return (
    <header className="hhr-header">
      <img className="hhr-header__logo" src={headerLogo} alt="Horn Heritage Resins" />
      <nav className="hhr-header__nav">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#wholesale" className="hhr-header__cta">
        INQUIRE
      </a>
    </header>
  );
}
