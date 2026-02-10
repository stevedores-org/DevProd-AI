
import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Database,
  Lock
} from 'lucide-react';
import { IntegrationStatus } from '../types';

interface Props {
  status: IntegrationStatus;
  onUpdate: (status: IntegrationStatus) => void;
}

const Integrations: React.FC<Props> = ({ status, onUpdate }) => {
  const [loading, setLoading] = useState<string | null>(null);

  const toggleIntegration = (id: keyof IntegrationStatus) => {
    setLoading(id);
    // Simulate API connection verification
    setTimeout(() => {
      onUpdate({ ...status, [id]: !status[id] });
      setLoading(null);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-800">Connect your tools</h2>
        <p className="text-slate-500">Enable AI agents to automatically fetch and analyze your development data from industry-standard platforms.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <IntegrationCard 
          id="jira"
          title="Atlassian Jira"
          description="Analyze sprint velocity, task completion times, and phase distribution across your projects."
          icon={<div className="bg-blue-500 p-3 rounded-xl text-white"><Database size={24} /></div>}
          connected={status.jira}
          onToggle={() => toggleIntegration('jira')}
          loading={loading === 'jira'}
        />
        <IntegrationCard 
          id="github"
          title="GitHub"
          description="Track PR lead times, merge rates, defect density, and code review participation metrics."
          icon={<div className="bg-slate-900 p-3 rounded-xl text-white"><Github size={24} /></div>}
          connected={status.github}
          onToggle={() => toggleIntegration('github')}
          loading={loading === 'github'}
        />
        <IntegrationCard 
          id="monday"
          title="Monday.com"
          description="Sync high-level roadmap items and planning metrics to correlate with implementation effort."
          icon={<div className="bg-rose-500 p-3 rounded-xl text-white"><Trello size={24} /></div>}
          connected={status.monday}
          onToggle={() => toggleIntegration('monday')}
          loading={loading === 'monday'}
        />
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex items-start gap-4">
        <div className="bg-indigo-600 p-2 rounded-lg text-white">
          <Lock size={20} />
        </div>
        <div>
          <h4 className="font-bold text-indigo-900">Enterprise Data Security</h4>
          <p className="text-sm text-indigo-700 mt-1">We use OAuth 2.0 and industry-standard encryption for all platform connections. Your code remains private; we only analyze metadata for productivity patterns.</p>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
  onToggle: () => void;
  loading: boolean;
}

const IntegrationCard: React.FC<CardProps> = ({ title, description, icon, connected, onToggle, loading }) => (
  <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-indigo-200 transition-colors">
    <div className="flex items-start gap-6">
      {icon}
      <div className="space-y-1">
        <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
          {title}
          {connected && <CheckCircle2 className="text-emerald-500" size={18} />}
        </h3>
        <p className="text-slate-500 max-w-md text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    
    <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
      {connected ? (
        <>
          <button className="text-slate-400 hover:text-slate-600 font-medium text-sm flex items-center gap-1">
            Configure <ExternalLink size={14} />
          </button>
          <button 
            onClick={onToggle}
            className="px-6 py-3 rounded-xl border border-rose-200 text-rose-600 font-bold hover:bg-rose-50 transition-all text-sm w-full md:w-auto"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button 
          onClick={onToggle}
          disabled={loading}
          className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70 w-full md:w-auto"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <><CheckCircle2 size={16} /> Connect Tool</>
          )}
        </button>
      )}
    </div>
  </div>
);

const Trello: React.FC<{size?: number}> = ({size = 20}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/><path d="M7 7h4v10H7z"/><path d="M13 7h4v5h-4z"/>
  </svg>
);

export default Integrations;
