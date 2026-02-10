
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  Zap, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp,
  BrainCircuit
} from 'lucide-react';

const DASHBOARD_DATA = [
  { name: 'Ideation', time: 45, errors: 12, quality: 88 },
  { name: 'Planning', time: 30, errors: 8, quality: 92 },
  { name: 'Design', time: 60, errors: 15, quality: 85 },
  { name: 'Implementation', time: 85, errors: 22, quality: 90 },
];

const TREND_DATA = [
  { month: 'Jan', velocity: 45, quality: 78 },
  { month: 'Feb', velocity: 52, quality: 82 },
  { month: 'Mar', velocity: 48, quality: 85 },
  { month: 'Apr', velocity: 61, quality: 88 },
  { month: 'May', velocity: 55, quality: 92 },
  { month: 'Jun', velocity: 70, quality: 94 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Avg. Completion Time" 
          value="42.5h" 
          change="-12%" 
          trend="down" 
          icon={<Clock className="text-indigo-600" />} 
          color="indigo" 
        />
        <KPICard 
          title="Overall Error Rate" 
          value="4.2%" 
          change="-2.1%" 
          trend="down" 
          icon={<AlertCircle className="text-rose-600" />} 
          color="rose" 
        />
        <KPICard 
          title="PR Velocity" 
          value="18.5" 
          change="+15%" 
          trend="up" 
          icon={<Zap className="text-amber-600" />} 
          color="amber" 
        />
        <KPICard 
          title="Code Quality Score" 
          value="94/100" 
          change="+4%" 
          trend="up" 
          icon={<CheckCircle2 className="text-emerald-600" />} 
          color="emerald" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Completion Time by Phase */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Time to Complete (Hours)</h3>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">By SDLC Phase</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DASHBOARD_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="time" radius={[4, 4, 0, 0]}>
                  {DASHBOARD_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6366f1' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Productivity Trends */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Productivity Trends</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs font-medium text-indigo-600">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Velocity
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Quality
              </span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TREND_DATA}>
                <defs>
                  <linearGradient id="colorVel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="velocity" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorVel)" />
                <Area type="monotone" dataKey="quality" stroke="#10b981" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold tracking-wide uppercase text-xs">
              <BrainCircuit size={16} />
              AI Insights Engine
            </div>
            <h2 className="text-3xl font-bold leading-tight">Your team's Design velocity is improving, but implementation error density has ticked up in the last 48 hours.</h2>
            <p className="text-slate-400">Our agents suggest conducting a quick technical peer review on current Implementation tasks to avoid rework later in the sprint.</p>
          </div>
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shrink-0">
            Apply Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, trend, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div className={`p-3 rounded-xl bg-${color}-50`}>
        {icon}
      </div>
      <span className={`flex items-center gap-0.5 text-xs font-bold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
        {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {change}
      </span>
    </div>
    <div className="mt-4">
      <h4 className="text-slate-500 text-sm font-medium">{title}</h4>
      <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
    </div>
  </div>
);

export default Dashboard;
