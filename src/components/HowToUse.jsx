import risingSmoke from '../assets/photos/rising-smoke.png';
import { howtoSteps } from '../data/content';
import './HowToUse.css';

export default function HowToUse() {
  return (
    <section className="hhr-howto" id="how-to-use">
      <div className="hhr-howto__copy">
        <div className="hhr-eyebrow">How to Use</div>
        <h2 className="hhr-howto__title">The Art of Burning Resin</h2>
        <div className="hhr-howto__steps">
          {howtoSteps.map((s) => (
            <div className="hhr-howto__step" key={s.n}>
              <div className="hhr-howto__step-num">{s.n}</div>
              <p className="hhr-howto__step-text">{s.t}</p>
            </div>
          ))}
        </div>
        <a href="#how-to-use" className="hhr-link-underline hhr-howto__link">
          FULL BURNING GUIDE →
        </a>
      </div>
      <div className="hhr-howto__media">
        <img className="hhr-media-img" src={risingSmoke} alt="Dabqaad burner with rising smoke" />
      </div>
    </section>
  );
}
