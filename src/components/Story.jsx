import harvesterPhoto from '../assets/photos/harvester-collecting-resin.png';
import './Story.css';

export default function Story() {
  return (
    <section className="hhr-story" id="story">
      <div className="hhr-story__media">
        <img
          className="hhr-media-img"
          src={harvesterPhoto}
          alt="Harvester collecting resin in Puntland"
        />
      </div>
      <div className="hhr-story__copy">
        <div className="hhr-eyebrow">Our Story</div>
        <h2 className="hhr-story__title">Where our resin actually comes from</h2>
        <p className="hhr-story__desc">
          For generations, families across Puntland have cut into the bark of wild desert trees
          and collected the resin as it hardens in the sun. We buy directly from them — no
          brokers in between — pay fairly, and know exactly which harvest each batch came from.
        </p>
        <a href="#story" className="hhr-link-underline">
          READ OUR FULL STORY →
        </a>
      </div>
    </section>
  );
}
