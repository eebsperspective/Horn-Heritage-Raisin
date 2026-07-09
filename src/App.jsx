import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import ShopByCategory from './components/ShopByCategory';
import Traceability from './components/Traceability';
import HowToUse from './components/HowToUse';
import Wholesale from './components/Wholesale';
import Journal from './components/Journal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="hhr-page">
      <Header />
      <Hero />
      <Story />
      <ShopByCategory />
      <Traceability />
      <HowToUse />
      <Wholesale />
      <Journal />
      <Footer />
    </div>
  );
}
