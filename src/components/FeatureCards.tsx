import React from 'react';
import {
  Code2,
  Users2,
  Brain,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface FeatureCardsProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ onNavigate }) => {
  const cards = [
    {
      tab: 'technical' as ActiveTab,
      title: 'Technical Questions',
      description: 'Practice commonly asked technical interview questions.',
      icon: Code2,
      badge: '9 Programming & CS Topics',
      highlights: ['Java, Python, C, JavaScript', 'SQL, Data Structures, DBMS', 'Clear Code & Explanations'],
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      hoverBorder: 'hover:border-blue-400 group-hover:shadow-blue-500/10',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      tab: 'hr' as ActiveTab,
      title: 'HR Questions',
      description: 'Prepare answers for common HR interview questions.',
      icon: Users2,
      badge: 'STAR Framework Ready',
      highlights: ['How to Answer Guide', 'Fresher Sample Answers', 'Dos and Don’ts for Freshers'],
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      hoverBorder: 'hover:border-indigo-400 group-hover:shadow-indigo-500/10',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      tab: 'aptitude' as ActiveTab,
      title: 'Aptitude Practice',
      description: 'Improve your quantitative and logical reasoning skills.',
      icon: Brain,
      badge: 'Interactive Quizzes',
      highlights: ['Quantitative Formulas', 'Speed & Time Calculation', 'Instant Score & Performance'],
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
      hoverBorder: 'hover:border-sky-400 group-hover:shadow-sky-500/10',
      btnColor: 'bg-sky-600 hover:bg-sky-700 text-white',
    },
    {
      tab: 'tips' as ActiveTab,
      title: 'Interview Tips',
      description: 'Learn practical tips to perform better in interviews.',
      icon: Lightbulb,
      badge: 'Proven Strategies',
      highlights: ['Before & During Checklist', 'Resume Best Practices', 'Avoid Fatal Mistakes'],
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      hoverBorder: 'hover:border-amber-400 group-hover:shadow-amber-500/10',
      btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Structured Preparation
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need for Campus & Fresher Drives
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Targeted preparation modules structured for college students, university placement cells, and fresh graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group bg-slate-50/50 hover:bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 ${card.hoverBorder}`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs ${card.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {card.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onNavigate(card.tab)}
                  className={`mt-6 w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${card.btnColor}`}
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
