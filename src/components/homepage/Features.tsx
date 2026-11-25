'use client';

import {
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Download,
  Lock,
} from 'lucide-react';

export default function Features() {
  const itemStyle = 'flex flex-col gap-1 items-center text-wrap';
  return (
    <section id="features">
      <ul className="flex justify-center gap-2">
        <li className={itemStyle}>
          <ChartNoAxesColumnIncreasing /> <span>Track Expenses</span>
        </li>
        <li className={itemStyle}>
          <ShieldCheck /> <span>Set Budgets</span>
        </li>
        <li className={itemStyle}>
          <Download /> <span>Export Data</span>
        </li>
        <li className={itemStyle}>
          <Lock /> <span>Your Data stays Private</span>
        </li>
      </ul>
    </section>
  );
}
