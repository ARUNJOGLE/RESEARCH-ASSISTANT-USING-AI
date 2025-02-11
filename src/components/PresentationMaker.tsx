import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Presentation, Layout, Image, Type, Download } from 'lucide-react';

const PresentationMaker: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState('professional');

  const slides = [
    { title: 'Title Slide', content: 'Research Topic Overview' },
    { title: 'Introduction', content: 'Background and Objectives' },
    { title: 'Methodology', content: 'Research Approach' },
    { title: 'Results', content: 'Key Findings' },
    { title: 'Conclusion', content: 'Summary and Future Work' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Presentation Maker</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Export Presentation
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
          >
            <div className="aspect-video bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center space-y-4 max-w-md">
                <h3 className="text-2xl font-bold text-gray-800">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-600">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Layout className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                Theme
              </h3>
            </div>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="professional">Professional</option>
              <option value="modern">Modern</option>
              <option value="minimal">Minimal</option>
              <option value="creative">Creative</option>
            </select>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pink-100 rounded-lg">
                <Type className="h-5 w-5 text-pink-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-800">
                Slide Structure
              </h3>
            </div>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors ${
                    currentSlide === index
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {slide.title}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PresentationMaker;