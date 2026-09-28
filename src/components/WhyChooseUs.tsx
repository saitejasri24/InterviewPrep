import React from 'react';
import {
  Clock,
  HelpCircle,
  Cpu,
  MessagesSquare,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Practice anytime',
      description:
        'Access curated interview materials 24/7 on your phone, tablet, or laptop between college lectures and late-night study sessions.',
      icon: Clock,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      title: 'Learn from commonly asked questions',
      description:
        'Focus on high-probability questions frequently tested by top tech companies, startups, and on-campus recruitment panels.',
      icon: HelpCircle,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Improve technical knowledge',
      description:
        'Deepen core concepts across Java, Python, C, SQL, and System Design with clean explanations and runnable code snippets.',
      icon: Cpu,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
    {
      title: 'Develop communication skills',
      description:
        'Master the STAR method for behavioral rounds and practice expressing complex technical logic with poise and clarity.',
      icon: MessagesSquare,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
    },
    {
      title: 'Track preparation progress',
      description:
        'Monitor your practice streak, aptitude quiz scores, and completed mock sessions through our live student progress dashboard.',
      icon: TrendingUp,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Build interview confidence',
      description:
        'Eliminate placement anxiety through timed mock practice sessions and actionable pre-interview checklists.',
      icon: ShieldCheck,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            Built for Student Success
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Interview Prep Hub?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered to bridge the gap between academic textbooks and real campus interview requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.color} group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
