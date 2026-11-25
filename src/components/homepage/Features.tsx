'use client';

import {
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Download,
  Lock,
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features">
      <ul>
        <li>
          <ChartNoAxesColumnIncreasing /> <span>Track Expenses</span>
        </li>
        <li>
          <ShieldCheck /> <span>Set Budgets</span>
        </li>
        <li>
          <Download /> <span>Export Data</span>
        </li>
        <li>
          <Lock /> <span>Your Data stays Private</span>
        </li>
      </ul>
    </section>
  );
}
