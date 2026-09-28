import React from 'react';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle,
  Award,
  Terminal,
  BrainCircuit,
  MessageSquareText,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl -z-10">
        <div className="w-[500px] h-[300px] bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-200 rounded-full mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6 shadow-xs animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Placement & Fresher Ready • 100% Free Practice</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Prepare Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Interview Better.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
            Practice technical questions, improve your aptitude, prepare for HR interviews, and
            build confidence for your next interview.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('technical')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('aptitude')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-blue-300 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <BrainCircuit className="w-4 h-4 text-blue-600" />
              <span>Take Aptitude Test</span>
            </button>
          </div>

          {/* Quick Metrics / Key highlights */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Technical</p>
                <p className="text-sm font-bold text-slate-900">9 Core Domains</p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">HR Rounds</p>
                <p className="text-sm font-bold text-slate-900">STAR Answers</p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Aptitude</p>
                <p className="text-sm font-bold text-slate-900">MCQs & Quizzes</p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Success Rate</p>
                <p className="text-sm font-bold text-slate-900">Student Focused</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
