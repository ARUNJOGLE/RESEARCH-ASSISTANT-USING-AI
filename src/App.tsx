import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageSquare, Lightbulb, Edit, FileText, Presentation } from 'lucide-react';
import ResearchForm from './components/ResearchForm';
import ResearchSummary from './components/ResearchSummary';
import QueryBot from './components/QueryBot';
import InnovativeIdeas from './components/InnovativeIdeas';
import PromptEditor from './components/PromptEditor';
import ReportGenerator from './components/ReportGenerator';
import PresentationMaker from './components/PresentationMaker';

function App() {
  const [activeTab, setActiveTab] = useState('research');
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchTopic: string) => {
    setTopic(searchTopic);
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const tabs = [
    { id: 'research', icon: Search, label: 'Research' },
    { id: 'summary', icon: BookOpen, label: 'Summary' },
    { id: 'query', icon: MessageSquare, label: 'Query Bot' },
    { id: 'ideas', icon: Lightbulb, label: 'Ideas' },
    { id: 'report', icon: FileText, label: 'Report' },
    { id: 'presentation', icon: Presentation, label: 'Presentation' },
    { id: 'prompt', icon: Edit, label: 'Prompt Editor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AI Research Assistant</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-gray-50 md:border-r border-gray-200">
              <nav className="p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-h-[calc(100vh-12rem)]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                {activeTab === 'research' && (
                  <ResearchForm onSearch={handleSearch} isLoading={isLoading} />
                )}
                {activeTab === 'summary' && <ResearchSummary topic={topic} />}
                {activeTab === 'query' && <QueryBot topic={topic} />}
                {activeTab === 'ideas' && <InnovativeIdeas topic={topic} />}
                {activeTab === 'report' && <ReportGenerator />}
                {activeTab === 'presentation' && <PresentationMaker />}
                {activeTab === 'prompt' && <PromptEditor />}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;