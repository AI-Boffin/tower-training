
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
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black italic mb-4 uppercase tracking-tighter">
            NUTRITION <span className="text-red-600">HUB</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Fuel your body, feed your potential. Simple, sustainable, and effective nutrition for real life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Chat/Info Area */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-zinc-900/50 p-1 border border-zinc-800 rounded-xl overflow-hidden">
              <ChatInterface
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                placeholder="Ask for recipe ideas or meal prep tips..."
                botName="Nutrition Hub AI"
              />
            </div>

            {/* Recipe Ideas Showcase */}
            <section>
              <h2 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-red-600 pl-4">Recipe Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Power Oats", desc: "Overnight oats with protein powder, berries, and a touch of honey for sustained morning energy.", time: "5 mins" },
                  { title: "Lean Tower Bowl", desc: "Grilled chicken, quinoa, roasted greens, and a squeeze of lime. Perfect for post-training.", time: "20 mins" }
                ].map((recipe, i) => (
                  <div key={i} className="bg-zinc-900 p-6 border border-zinc-800 hover:border-red-600/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold uppercase">{recipe.title}</h3>
                      <span className="text-[10px] bg-red-600/10 text-red-600 px-2 py-1 font-black">{recipe.time}</span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">{recipe.desc}</p>
                    <button className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">View Full Recipe →</button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 border-t-4 border-red-600">
              <h3 className="text-xl font-bold mb-6 uppercase italic">Meal Prepping Tips</h3>
              <ul className="space-y-6">
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">Batch Cook Proteins</h4>
                  <p className="text-zinc-400 text-sm">Cook 1-2kg of protein at once to save hours during the week.</p>
                </li>
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">The Three-S Rule</h4>
                  <p className="text-zinc-400 text-sm">Simple, Scalable, Sustainable. If you can't prep it in 30 mins, simplify it.</p>
                </li>
                <li className="group">
                  <h4 className="text-red-600 font-black text-xs uppercase mb-1">Track with Sheets</h4>
                  <p className="text-zinc-400 text-sm">Use our custom <span className="text-white font-bold underline">Google Sheets</span> to plan your week and stay on track.</p>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 border border-zinc-800 relative group overflow-hidden">
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase italic">Need a Custom Plan?</h3>
                <p className="text-zinc-500 text-sm mb-6">Our AI is friendly, knowledgeable, and ready to help you find what works for YOU.</p>
                <div className="inline-block px-8 py-3 bg-red-600 text-white font-black uppercase text-xs tracking-widest skew-x-[-12deg]">
                  <span className="inline-block skew-x-[12deg]">Ask our Lead AI</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000"
              alt="Meal Prep"
              className="w-full h-64 object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
