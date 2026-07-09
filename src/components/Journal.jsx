import Placeholder from './Placeholder';
import { journalPosts } from '../data/content';
import './Journal.css';

export default function Journal() {
  return (
    <section className="hhr-journal" id="journal">
      <div className="hhr-journal__header">
        <div className="hhr-journal__intro">
          <div className="hhr-eyebrow">The Journal</div>
          <h2 className="hhr-journal__title">History, Rituals &amp; Notes on Resin</h2>
        </div>
        <a href="#journal" className="hhr-link-underline">
          VISIT THE JOURNAL →
        </a>
      </div>
      <div className="hhr-journal__grid">
        {journalPosts.map((p) => (
          <div className="hhr-journal-card" key={p.title}>
            <div className="hhr-journal-card__media">
              <Placeholder preset="sandLight" caption="journal photo" />
            </div>
            <div className="hhr-journal-card__tag">{p.tag}</div>
            <h3 className="hhr-journal-card__title">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
