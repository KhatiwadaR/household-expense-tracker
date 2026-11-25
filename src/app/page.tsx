//import Link from 'next/link';
import Header from '@/components/layout/Header';
import Home from '@/components/homepage/Home';
import Features from '@/components/homepage/Features';
import About from '@/components/homepage/About';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between gap-4 p-4 w-full">
      <Header />
      <Home />
      <Features />
      <About />
    </main>
  );
}
