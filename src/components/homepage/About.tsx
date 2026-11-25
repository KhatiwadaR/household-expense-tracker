'use client';

import { CircleCheck } from 'lucide-react';

export default function About() {
  const usefulness = [
    'Easy to use and beginner-friendly',
    'Visual insight with clean charts',
    'No sign-up required to try',
    'Works on any device',
  ];
  return (
    <section id="about" className="flex flex-col gap-2">
      <div></div>
      <div className="flex flex-col gap-2">
        <h2>Why Choose Us?</h2>
        <p>
          A simple and effective way to manage your household finances, designed
          for everyone.
        </p>
        <ul>
          {usefulness.map((item, index) => (
            <li key={index} className="flex gap-2">
              <CircleCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
