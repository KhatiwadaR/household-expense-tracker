//import Link from 'next/link';
import Header from '@/components/layout/Header';
import Home from '@/components/homepage/Home';
import Features from '@/components/homepage/Features';
import About from '@/components/homepage/About';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Home />
      <Features />
      <About />
    </main>
  );
}
