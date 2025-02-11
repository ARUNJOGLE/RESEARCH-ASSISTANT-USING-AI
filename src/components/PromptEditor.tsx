import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw } from 'lucide-react';

const PromptEditor: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const handleSave = () => {
    // Handle saving the prompt
    console.log('Saving prompt:', prompt);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Prompt Editor</h2>
        <div className="space-x-3">
          <button
            onClick={() => setPrompt('')}
            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Prompt Template
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={10}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your custom prompt template here..."
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Available Variables</h3>
            <div className="grid grid-cols-2 gap-2">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">{'{{topic}}'}</code>
              <span className="text-sm text-gray-600">The research topic</span>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">{'{{year}}'}</code>
              <span className="text-sm text-gray-600">Current year</span>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">{'{{depth}}'}</code>
              <span className="text-sm text-gray-600">Research depth level</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromptEditor;