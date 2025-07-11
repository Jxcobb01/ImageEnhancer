import React from 'react';

const testimonials = [
  {
    name: 'Alex P.',
    quote: 'The AI Image Enhancer made my old photos look brand new. Super easy to use!',
  },
  {
    name: 'Jamie L.',
    quote: 'I was amazed by the quality and speed. Highly recommend for anyone needing quick image fixes.',
  },
  {
    name: 'Morgan S.',
    quote: 'Secure, fast, and the results are stunning. My go-to tool for image enhancement!',
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 text-center">
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <div className="text-blue-600 font-semibold">- {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 