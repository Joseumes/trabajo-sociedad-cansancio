import React, { useEffect } from 'react';
import AOS from 'aos';

export default function SectionText({ id, title, paragraphs }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id={id} className="py-16 container-max mx-auto text-gray-100">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} data-aos="fade-up" className="text-lg leading-relaxed glass p-6 rounded-md">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
