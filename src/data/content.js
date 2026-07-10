import categoryFrankincense from '../assets/photos/category-frankincense.png';
import categoryMyrrh from '../assets/photos/category-myrrh.png';
import categoryBlends from '../assets/photos/category-blends.png';
import categoryBurningEssentials from '../assets/photos/category-burning-essentials.png';
import categoryResinOils from '../assets/photos/category-resin-oils.png';
import categoryGiftSets from '../assets/photos/category-gift-sets.png';
import categoryWholesale from '../assets/photos/category-wholesale.png';
import journalHistory from '../assets/photos/journal-history.png';
import journalGuide from '../assets/photos/journal-guide.png';
import journalRitual from '../assets/photos/journal-ritual.png';

export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Our Story', href: '#story' },
  { label: 'How to Use', href: '#how-to-use' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const categories = [
  { name: 'Frankincense', sub: 'Graded by quality — Hojari, Maydi and Beyo', tag: '01', img: categoryFrankincense },
  { name: 'Myrrh', sub: 'Raw resin, a few different grades', tag: '02', img: categoryMyrrh },
  { name: 'Blends', sub: 'Frankincense and myrrh, mixed by hand', tag: '03', img: categoryBlends },
  { name: 'Burning Essentials', sub: 'Charcoal discs and traditional dabqaad burners', tag: '04', img: categoryBurningEssentials },
  { name: 'Resin Oils', sub: 'Frankincense and myrrh, distilled into oil', tag: '05', img: categoryResinOils },
  { name: 'Gift Sets', sub: 'Resin, a burner, and a simple care guide', tag: '06', img: categoryGiftSets },
  { name: 'Wholesale', sub: 'For shops, spas, and mosques', tag: '07', img: categoryWholesale },
];

export const traceItems = [
  {
    h: 'We Know Where It Comes From',
    p: 'Every batch is linked back to the harvesters and region it came from — no anonymous middlemen.',
  },
  {
    h: 'Direct Trade',
    p: 'We pay Puntland harvesters fairly and consistently, season after season.',
  },
  {
    h: 'One Place, One Harvest',
    p: 'We never mix resin from different regions together — each grade comes from one place.',
  },
];

export const howtoSteps = [
  { n: '01', t: 'Light a charcoal disc until it glows and ashes over.' },
  { n: '02', t: 'Place it in your dabqaad or a heatproof burner.' },
  { n: '03', t: 'Add a small piece of resin atop the coal.' },
  { n: '04', t: 'Let the smoke rise — refresh the resin as it melts away.' },
];

export const journalPosts = [
  { title: 'A Short History of the Land of Punt', tag: 'History', img: journalHistory },
  { title: 'What Makes Hojari Different From Maydi', tag: 'Guide', img: journalGuide },
  { title: 'Dabqaad: How Resin Is Traditionally Burned', tag: 'Ritual', img: journalRitual },
];

export const footerCols = [
  { h: 'Shop', links: ['Frankincense', 'Myrrh', 'Blends', 'Gift Sets'] },
  { h: 'Company', links: ['Our Story', 'Wholesale', 'Journal', 'Contact'] },
  { h: 'Connect', links: ['Instagram', 'Email Us'] },
];
