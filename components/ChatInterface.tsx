
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  placeholder: string;
  botName: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage, isLoading, placeholder, botName }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden rounded-lg">
      <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <h3 className="font-bold tracking-widest text-zinc-200 uppercase">{botName} ACTIVE</h3>
        </div>
        <div className="text-xs text-zinc-500 font-mono">ENCRYPTED_SESSION_V1.0</div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-950">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600 italic">No communication logged. Initiate contact.</p>
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-5 py-4 rounded-sm ${
                m.role === 'user'
                  ? 'bg-red-700 text-white'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-200'
              }`}
            >
              <div className="text-[10px] uppercase font-bold opacity-50 mb-1">
                {m.role === 'user' ? 'CLIENT' : botName.toUpperCase()} • {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-zinc-900 border-t border-zinc-800">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-grow bg-black border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors uppercase text-sm tracking-wider"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white px-8 py-3 font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center"
          >
            <span className="mr-2 uppercase">Send</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
