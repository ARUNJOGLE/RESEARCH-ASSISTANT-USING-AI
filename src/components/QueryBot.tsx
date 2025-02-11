import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

interface QueryBotProps {
  topic: string;
}

const QueryBot: React.FC<QueryBotProps> = ({ topic }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setMessages([...messages, { text: query, isBot: false }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: `Here's what I found about "${query}" related to ${topic}...`, 
          isBot: true 
        }]);
      }, 1000);
      setQuery('');
    }
  };

  if (!topic) {
    return (
      <div className="text-center text-gray-600">
        Please start by searching for a topic in the Research tab.
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-16rem)] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question about the research..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 p-2 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryBot;