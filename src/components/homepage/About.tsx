'use client';

export default function About() {
  const usefulness = [
    'Easy to use and beginner-friendly',
    'Visual insight with clean charts',
    'No sign-up required to try',
    'Works on any device',
  ];
  return (
    <section id="about">
      <div></div>
      <div>
        <h2>Why Choose Us?</h2>
        <p>
          A simple and effective way to manage your household finances, designed
          for everyone.
        </p>
        <ul>
          {usefulness.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
