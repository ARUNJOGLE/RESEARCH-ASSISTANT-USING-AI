import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Settings, Download, Layout } from 'lucide-react';

const ReportGenerator: React.FC = () => {
  const [template, setTemplate] = useState('standard');
  const [sections, setSections] = useState(['introduction', 'methodology', 'results', 'conclusion']);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Report Generator</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Layout className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-800">
              Template Selection
            </h3>
          </div>
          <div className="space-y-3">
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="standard">Standard Academic</option>
              <option value="technical">Technical Report</option>
              <option value="executive">Executive Summary</option>
              <option value="research">Research Paper</option>
            </select>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Settings className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-800">
              Sections Configuration
            </h3>
          </div>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={section} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked
                  onChange={() => {
                    const newSections = sections.filter((_, i) => i !== index);
                    setSections(newSections);
                  }}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="capitalize">{section}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-800">
            Preview
          </h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[300px]">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-800">Sample Report Title</h4>
            {sections.map((section) => (
              <div key={section} className="space-y-2">
                <h5 className="text-lg font-semibold capitalize">{section}</h5>
                <p className="text-gray-600">
                  Sample content for {section} section will appear here...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReportGenerator;