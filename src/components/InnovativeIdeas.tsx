import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target } from 'lucide-react';

interface InnovativeIdeasProps {
  topic: string;
}

const InnovativeIdeas: React.FC<InnovativeIdeasProps> = ({ topic }) => {
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
      <h2 className="text-2xl font-bold text-gray-900">
        Future Research Directions: {topic}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-800">
              Innovative Concepts
            </h3>
          </div>
          <p className="text-gray-600">
            AI-generated innovative research concepts and potential breakthroughs in the field would be listed here.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-800">
              Emerging Trends
            </h3>
          </div>
          <p className="text-gray-600">
            Analysis of emerging trends and potential future developments in the field would be shown here.
          </p>
        </motion.div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Target className="h-6 w-6 text-pink-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-800">
            Research Opportunities
          </h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Detailed suggestions for future research directions and potential areas of exploration would be listed here.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Potential research opportunity 1</li>
            <li>Potential research opportunity 2</li>
            <li>Potential research opportunity 3</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default InnovativeIdeas;