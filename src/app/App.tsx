import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { CulinaryExperiences } from '@/app/components/CulinaryExperiences';
import { ProductGrid } from '@/app/components/ProductGrid';
import { BlueFeatureBand } from '@/app/components/BlueFeatureBand';
import { EditorialSplit } from '@/app/components/EditorialSplit';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CulinaryExperiences />
        <ProductGrid />
        <BlueFeatureBand />
        <EditorialSplit />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
