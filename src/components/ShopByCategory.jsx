import Placeholder from './Placeholder';
import { categories } from '../data/content';
import './ShopByCategory.css';

export default function ShopByCategory() {
  return (
    <section className="hhr-categories" id="shop">
      <div className="hhr-categories__intro">
        <div className="hhr-eyebrow">Shop by Category</div>
        <h2 className="hhr-categories__title">Resins, Rituals &amp; Essentials</h2>
        <p className="hhr-categories__desc">
          Discover your signature scent today — explore our curated collection and find the
          perfect fragrance that defines you.
        </p>
      </div>
      <div className="hhr-categories__grid">
        {categories.map((c) => (
          <div className="hhr-category-card" key={c.tag}>
            <div className="hhr-category-card__media">
              <Placeholder preset="sandLight" caption={c.name} />
            </div>
            <div className="hhr-category-card__body">
              <div className="hhr-category-card__tag">{c.tag}</div>
              <h3 className="hhr-category-card__name">{c.name}</h3>
              <p className="hhr-category-card__sub">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
