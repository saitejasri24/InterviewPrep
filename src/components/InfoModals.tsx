import React from 'react';
import { X, ShieldCheck, Mail, GraduationCap } from 'lucide-react';

interface InfoModalProps {
  type: 'about' | 'contact' | 'privacy' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'about' && (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">About Interview Prep Hub</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              <strong>Interview Prep Hub</strong> was designed specifically for college students,
              graduating seniors, and freshers preparing for on-campus and off-campus recruitment
              drives.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Our mission is to provide free, high-yield practice across core technical disciplines,
              behavioral STAR frameworks, and aptitude quizzes so students enter interview rooms with
              unshakable confidence.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              Future integration will include an external AI Interview Assistant powered via n8n
              automation workflows.
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Contact & Feedback</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Have questions, feedback, or want new technical categories added? We’d love to hear from
              students and campus placement coordinators.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span className="font-semibold">Support Email:</span>
                <span className="text-blue-600 font-mono">support@interviewprephub.org</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span className="font-semibold">Campus Placement Drives:</span>
                <span className="text-indigo-600 font-mono">campus@interviewprephub.org</span>
              </div>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy Policy</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              At <strong>Interview Prep Hub</strong>, student privacy is paramount:
            </p>
            <ul className="text-xs text-slate-600 space-y-2 mb-4 list-disc list-inside">
              <li>All your practice progress, quiz scores, and notes are stored strictly in your browser (LocalStorage).</li>
              <li>No personal information, tracking cookies, or profiling data is sold or transmitted to third parties.</li>
              <li>When the future n8n AI assistant is integrated, responses will only be used for automated interview scoring during your session.</li>
            </ul>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
