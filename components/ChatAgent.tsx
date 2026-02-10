
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, Plus, Search, BarChart3, Clock, AlertTriangle } from 'lucide-react';
import { ChatMessage } from '../types';

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content: "Hi Jane! I'm your productivity co-pilot. I can analyze metrics across Jira and GitHub to explain bottlenecks or suggest improvements. What would you like to know about the current sprint?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

const ChatAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        role: 'assistant',
        content: generateMockResponse(input),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const generateMockResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('design')) return "Looking at the Jira data, Design tasks are currently averaging 60 hours, which is 25% slower than the previous sprint. This is largely due to three complex UI components still in 'Peer Review' status.";
    if (q.includes('bottleneck')) return "The primary bottleneck right now is the Implementation phase of the 'Auth Redesign' epic. Code review response times in GitHub have increased to an average of 14 hours over the last 3 days.";
    return "I've analyzed the recent trends. Overall velocity is up, but error density in implementation is slightly above the threshold. I recommend prioritizing bug squashing for the next 24 hours.";
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
      {/* Agent Info Header */}
      <div className="px-8 py-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">SDLC Co-Pilot</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 
              Analyzing metrics in real-time
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors"><Search size={20} /></button>
          <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors"><Plus size={20} /></button>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`p-2 rounded-xl shrink-0 ${msg.role === 'assistant' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
              {msg.role === 'assistant' ? <Sparkles size={18} /> : <User size={18} />}
            </div>
            <div className={`max-w-[80%] space-y-1 ${msg.role === 'user' ? 'text-right' : ''}`}>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm border ${
                msg.role === 'assistant' 
                  ? 'bg-white border-slate-100 rounded-tl-none text-slate-800' 
                  : 'bg-indigo-600 border-indigo-500 rounded-tr-none text-white'
              }`}>
                {msg.content}
              </div>
              <p className="text-[10px] text-slate-400 font-medium px-2">{msg.timestamp}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-4">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shrink-0">
              <Sparkles size={18} />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 rounded-tl-none shadow-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </div>

      {/* Suggestion Chips */}
      <div className="px-8 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-3 bg-white">
        <SuggestionChip icon={<BarChart3 size={14}/>} label="Compare phases" onClick={() => setInput("Can you compare the velocity of the last 3 phases?")} />
        <SuggestionChip icon={<Clock size={14}/>} label="Analyze bottlenecks" onClick={() => setInput("What are the main bottlenecks in our current sprint?")} />
        <SuggestionChip icon={<AlertTriangle size={14}/>} label="High error density" onClick={() => setInput("Why is the error density high in implementation?")} />
      </div>

      {/* Input Area */}
      <div className="p-8 bg-white border-t border-slate-100">
        <div className="relative group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about team productivity..."
            className="w-full pl-6 pr-16 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
          />
          <button 
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-4 text-center">Powered by SDLC Insights Engine. AI can make mistakes, verify important metrics.</p>
      </div>
    </div>
  );
};

interface SuggestionProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SuggestionChip: React.FC<SuggestionProps> = ({ label, icon, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all shrink-0"
  >
    {icon}
    {label}
  </button>
);

export default ChatAgent;
