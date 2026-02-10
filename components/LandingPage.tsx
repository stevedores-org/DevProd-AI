
import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  MessageSquare, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Github, 
  Globe,
  Star,
  Layers,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              DevProd AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <BookOpen size={16} /> Docs
            </a>
            <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <Users size={16} /> Community
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onGetStarted}
              className="hidden sm:block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onGetStarted}
              className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-indigo-600/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium animate-bounce">
            <SparkleIcon className="w-4 h-4" />
            <span>AI-Powered SDLC Optimization is here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
            Quantify Your Engineering <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Impact with AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop guessing your team's productivity. Connect Jira, GitHub, and Monday to surface hidden bottlenecks using autonomous AI agents.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-500/20"
            >
              Start Free Trial <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Trusted By / Logos */}
          <div className="pt-20 space-y-6">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Trusted by forward-thinking teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
              <div className="flex items-center gap-2 font-bold text-2xl"><Layers size={28}/> Velocity</div>
              <div className="flex items-center gap-2 font-bold text-2xl"><Globe size={28}/> Orbit</div>
              <div className="flex items-center gap-2 font-bold text-2xl"><BarChart3 size={28}/> Metric</div>
              <div className="flex items-center gap-2 font-bold text-2xl"><Shield size={28}/> Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-400" />}
              title="Real-time Velocity"
              description="Monitor sprint health and PR cycle times across all repositories in one unified dashboard."
            />
            <FeatureCard 
              icon={<MessageSquare className="text-indigo-400" />}
              title="AI Co-Pilot"
              description="Ask questions like 'Why is implementation slow this week?' and get data-backed answers immediately."
            />
            <FeatureCard 
              icon={<Shield className="text-emerald-400" />}
              title="Enterprise Ready"
              description="Bank-grade security with SOC2 compliance. Your data is encrypted and never used for training."
            />
          </div>
        </div>
      </section>

      {/* Community & Docs Section */}
      <section className="py-24 bg-white/5 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Built for Developers, <br /> Loved by Leaders.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Join a growing community of 50,000+ engineering managers and developers who are building more efficient teams with DevProd AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                <Github size={20} /> Star on GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                <Users size={20} /> Join Discord
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 space-y-3">
              <BookOpen className="text-purple-400" />
              <h4 className="font-bold">Documentation</h4>
              <p className="text-xs text-slate-500">API references and integration guides for every platform.</p>
              <a href="#" className="text-xs font-bold text-white block pt-2 underline underline-offset-4">Read Docs</a>
            </div>
            <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 space-y-3 mt-8">
              <Star className="text-amber-400" />
              <h4 className="font-bold">Community</h4>
              <p className="text-xs text-slate-500">Weekly webinars and developer roundtables on productivity.</p>
              <a href="#" className="text-xs font-bold text-white block pt-2 underline underline-offset-4">Explore Community</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50">
            <TrendingUp size={20} />
            <span className="font-bold text-sm">DevProd AI © 2026</span>
          </div>
          <div className="flex gap-8 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-300">
    <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default LandingPage;
