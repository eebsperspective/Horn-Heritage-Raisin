import Placeholder from './Placeholder';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hhr-hero">
      <div className="hhr-hero__copy">
        <div className="hhr-eyebrow hhr-hero__kicker">Direct from Puntland, Somalia</div>
        <h1 className="hhr-hero__title">Ancient Resins, Honest Sourcing</h1>
        <p className="hhr-hero__desc">
          Frankincense and myrrh, harvested by hand in Puntland and sold the way it&rsquo;s
          always been done — one family, one harvest, no middlemen.
        </p>
        <div className="hhr-hero__actions">
          <a href="#shop" className="hhr-btn hhr-btn--solid">
            SHOP THE COLLECTION
          </a>
          <a href="#wholesale" className="hhr-btn hhr-btn--outline-light">
            WHOLESALE INQUIRY
          </a>
        </div>
      </div>
      <div className="hhr-hero__media">
        <Placeholder preset="forest" caption="product photo — hojari frankincense tears, close crop" />
      </div>
    </section>
  );
}
