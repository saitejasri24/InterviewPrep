import React from 'react';
import { GraduationCap, Heart, Code2, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenInfo: (type: 'about' | 'contact' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfo }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Interview Prep <span className="text-blue-400">Hub</span>
              </span>
            </div>

            {/* Required Motto */}
            <p className="text-sm text-slate-300 max-w-sm font-normal">
              Helping students prepare for interviews with confidence.
            </p>

            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              A comprehensive open educational platform designed to empower college students and
              freshers with coding fundamentals, STAR behavioral questions, and aptitude mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Practice Modules
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('technical')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Technical Questions (9 Categories)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hr')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  HR & Behavioral Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aptitude')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Aptitude Quizzes & Reasoning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tips')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Interview Tips & Resume Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mock')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Timed Mock Interview Simulation
                </button>
              </li>
            </ul>
          </div>

          {/* Required Footer Links: About, Contact, Privacy Policy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resources & Info
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onOpenInfo('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfo('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfo('privacy')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('progress')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Progress Dashboard
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Interview Prep Hub. Built for college students & freshers.</p>
          <div className="flex items-center gap-2">
            <span>Clean Architecture for Future n8n Webhook Integration</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
