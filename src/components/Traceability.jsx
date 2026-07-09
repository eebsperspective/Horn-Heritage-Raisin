import { traceItems } from '../data/content';
import './Traceability.css';

export default function Traceability() {
  return (
    <section className="hhr-trace">
      {traceItems.map((b) => (
        <div className="hhr-trace__item" key={b.h}>
          <h3 className="hhr-trace__heading">{b.h}</h3>
          <p className="hhr-trace__desc">{b.p}</p>
        </div>
      ))}
    </section>
  );
}
