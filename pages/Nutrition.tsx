
import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { Message } from '../types';
import { getNutritionAdvice } from '../services/geminiService';

const Nutrition: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getNutritionAdvice(text);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic mb-4">
            NUTRITION <span className="text-red-600">PROTOCOLS</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto uppercase tracking-wider">
            You can't outrun a bad diet. Use our AI specialist to craft your high-performance fueling strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              placeholder="E.g., 'Give me a 3000 calorie bulk plan for a 100kg lifter'"
              botName="Nutrition AI"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 border-l-4 border-red-600">
              <h3 className="text-xl font-bold mb-4 uppercase">The Core Tenets</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">01.</span>
                  <span>Protein is non-negotiable. Aim for 2g per kg of lean mass.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">02.</span>
                  <span>If it doesn't grow in the ground or have a heartbeat, don't eat it.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">03.</span>
                  <span>Water intake is a discipline. 4 liters minimum per day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">04.</span>
                  <span>Carbs are fuel, not comfort. Earn them in the gym.</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-600 p-6 text-black">
              <h3 className="text-xl font-bold mb-2 uppercase italic">Elite Performance</h3>
              <p className="text-sm font-bold opacity-80 mb-4">"Don't count calories? Then don't count on results."</p>
              <div className="h-1 bg-black/20 mb-4"></div>
              <p className="text-xs uppercase font-black">Powered by Tower Intelligence v4.0</p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy Meal" 
              className="w-full h-48 object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
