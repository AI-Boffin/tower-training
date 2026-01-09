
import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { Message } from '../types';
import { askTom } from '../services/geminiService';

const AskTom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: "Hey! Glad you're here. I'm Tom. Whether you're looking to tweak your training or just need some friendly advice on staying active, I'm here to help. What's on your mind today? Cheers, Tom",
      timestamp: new Date(),
    }
  ]);
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
      const response = await askTom(text);
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
    <div className="min-h-screen bg-black pt-12 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-black rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-zinc-950 p-8 border border-zinc-900">
              <h1 className="text-6xl font-black italic mb-2">ASK <span className="text-red-600">TOM</span></h1>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-6">Your Partner in Performance</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                "Health and movement should fit your life, not the other way around. I'm here to help you build a system that works for you, using real tools like Google Sheets to keep us on track. Let's chat about your goals."
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 space-y-4">
            <h3 className="text-xl font-bold uppercase italic border-b border-red-600 pb-2">Common Inquiries</h3>
            <ul className="space-y-3 text-xs font-black uppercase tracking-tighter text-zinc-500">
              <li className="hover:text-red-500 cursor-pointer transition-colors" onClick={() => handleSendMessage("How do I fix my squat depth?")}>→ fixing squat depth</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors" onClick={() => handleSendMessage("What should I do if I missed a workout?")}>→ missed workout recovery</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors" onClick={() => handleSendMessage("How much sleep do I actually need?")}>→ recovery metrics</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors" onClick={() => handleSendMessage("Convince me to go to the gym today.")}>→ motivation protocols</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            placeholder="Ask me anything about training or health..."
            botName="Tom"
          />
          <div className="mt-6 flex items-center justify-between text-[10px] text-zinc-600 uppercase font-black tracking-[0.3em]">
            <span>TRAINING_HUB_ACTIVE</span>
            <span>DATA_SHEETS_SYNCED</span>
            <span>TOWER_TRAINING_SECURE_COMMS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskTom;
