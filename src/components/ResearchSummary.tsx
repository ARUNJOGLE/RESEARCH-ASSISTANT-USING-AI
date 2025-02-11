import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

interface ResearchSummaryProps {
  topic: string;
}

const ResearchSummary: React.FC<ResearchSummaryProps> = ({ topic }) => {
  if (!topic) {
    return (
      <div className="text-center text-gray-600">
        Please start by searching for a topic in the Research tab.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Research Summary: {topic}</h2>
        <button className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Key Findings</h3>
        <p className="text-gray-600">
          This is where the AI-generated research summary would appear, highlighting the most important findings and developments in the field of {topic}.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800">Methodology</h3>
        <p className="text-gray-600">
          Details about the research methodologies and approaches used in recent studies would be presented here.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Impact & Applications</h3>
        <p className="text-gray-600">
          Discussion of the practical implications and potential applications of the research findings in the field of {topic}.
        </p>
      </div>
    </motion.div>
  );
};

export default ResearchSummary;