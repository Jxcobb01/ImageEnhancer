import React from 'react';

function Hero() {
  return (
    <section className="bg-white py-16 shadow-md">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">AI Image Enhancer</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">Enhance your images instantly with the power of AI. Sharpen, upscale, and restore photos in one click.</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition">Enhance Your Image</a>
      </div>
    </section>
  );
}

export default Hero; 