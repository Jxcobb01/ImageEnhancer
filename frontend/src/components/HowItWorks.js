import React from 'react';

const steps = [
  {
    title: 'Upload',
    description: 'Choose the image you want to enhance.',
    icon: '📤',
  },
  {
    title: 'Enhance',
    description: 'Our AI analyzes and improves your image.',
    icon: '✨',
  },
  {
    title: 'Download',
    description: 'Get your enhanced image instantly.',
    icon: '⬇️',
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-gray-50 rounded-xl shadow p-6 text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks; 