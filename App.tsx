
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  MessageSquare, 
  TrendingUp, 
  Bell,
  Search
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Integrations from './components/Integrations';
import ChatAgent from './components/ChatAgent';
import LandingPage from './components/LandingPage';
import { IntegrationStatus } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'integrations' | 'chat'>('dashboard');
  const [integrationStatus, setIntegrationStatus] = useState<IntegrationStatus>({
    jira: false,
    github: false,
    monday: false
  });

  if (!isLoggedIn) {
    return <LandingPage onGetStarted={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 animate-in fade-in duration-500">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="bg-indigo-500 p-2 rounded-lg">
            <TrendingUp size={24} />
          </div>
          <span className="font-bold text-lg tracking-tight">DevProd AI</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={<MessageSquare size={20} />} 
            label="AI Assistant" 
            active={activeTab === 'chat'} 
            onClick={() => setActiveTab('chat')} 
          />
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Integrations" 
            active={activeTab === 'integrations'} 
            onClick={() => setActiveTab('integrations')} 
          />
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="m-4 text-xs text-slate-500 hover:text-white transition-colors"
        >
          Sign Out
        </button>

        <div className="p-6 bg-slate-800/50 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">Jane Developer</p>
              <p className="text-xs text-slate-400">Team Lead</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-semibold capitalize">
            {activeTab === 'dashboard' ? 'Analytics Overview' : activeTab}
          </h1>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search metrics..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <button className="text-slate-500 hover:text-slate-800 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Dynamic View */}
        <div className="p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'integrations' && (
            <Integrations 
              status={integrationStatus} 
              onUpdate={setIntegrationStatus} 
            />
          )}
          {activeTab === 'chat' && <ChatAgent />}
        </div>
      </main>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

export default App;
