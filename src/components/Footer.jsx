import headerLogo from '../assets/header-logo.png';
import { footerCols } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="hhr-footer" id="contact">
      <div className="hhr-footer__brand">
        <img className="hhr-footer__logo" src={headerLogo} alt="Horn Heritage Resins" />
        <p className="hhr-footer__tagline">
          Frankincense and myrrh, harvested by hand in Puntland, Somalia.
        </p>
      </div>
      {footerCols.map((col) => (
        <div className="hhr-footer__col" key={col.h}>
          <div className="hhr-footer__col-heading">{col.h}</div>
          {col.links.map((l) => (
            <a href="#" key={l} className="hhr-footer__link">
              {l}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
}
