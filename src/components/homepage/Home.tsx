'use client';

import Link from 'next/link';
import Image from 'next/image';
import home from '@/../public/images/home.webp';
import { ChartNoAxesColumnIncreasing, MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <section id="home">
      <div>
        <p>
          <ChartNoAxesColumnIncreasing size={30} />
          <span>Smart. Simple. Free</span>
        </p>

        <h2>
          Track Your Household Expenses <span>with Ease</span>
        </h2>

        <p>
          Stay on top of your spending, set budgets and achieve your financial
          goals.
        </p>

        <Link href="/dashboard">
          Start Tracking Free <MoveRight size={30} />
        </Link>
      </div>

      <div>
        <Image src={home} alt="homepage picture" width={50} height={50} />
      </div>
    </section>
  );
}
