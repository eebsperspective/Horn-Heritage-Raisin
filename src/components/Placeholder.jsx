import './Placeholder.css';

const STRIPE_PRESETS = {
  forest: ['#20302c', '#233833'],
  sand: ['#e7dcc4', '#ded1b2'],
  sandLight: ['#ece2cd', '#e4d6b8'],
};

export default function Placeholder({ preset = 'sand', caption, height, className = '' }) {
  const [a, b] = STRIPE_PRESETS[preset];
  const tone = preset === 'forest' ? 'dark' : 'light';
  return (
    <div
      className={`hhr-placeholder ${className}`}
      style={{
        height,
        background: `repeating-linear-gradient(115deg, ${a}, ${a} 14px, ${b} 14px, ${b} 28px)`,
      }}
    >
      <span className={`hhr-placeholder__caption hhr-placeholder__caption--${tone}`}>{caption}</span>
    </div>
  );
}
