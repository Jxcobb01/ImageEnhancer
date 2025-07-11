import React from 'react';

const features = [
  {
    title: 'One-Click Enhancement',
    description: 'Upload your image and let our AI do the rest. No technical skills required.',
    icon: '⚡️',
  },
  {
    title: 'AI-Powered Quality',
    description: 'State-of-the-art models improve sharpness, color, and clarity automatically.',
    icon: '🤖',
  },
  {
    title: 'Secure & Private',
    description: 'Your images are processed securely and never stored without your permission.',
    icon: '🔒',
  },
  {
    title: 'Fast Results',
    description: 'Get enhanced images in seconds, not minutes.',
    icon: '🚀',
  },
];

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features; 