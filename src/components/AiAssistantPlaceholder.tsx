import React from 'react';
import { Bot, Sparkles, Workflow, Bell, ArrowRight } from 'lucide-react';

/**
 * ARCHITECTURE NOTE FOR FUTURE n8n INTEGRATION:
 * This component is strictly a placeholder area designed according to project specs.
 * When you are ready to integrate your n8n workflow:
 * 1. Connect this component to your n8n Webhook trigger URL (e.g., https://your-n8n-instance/webhook/interview-assistant).
 * 2. Send candidate responses or queries via HTTP POST.
 * 3. Receive automated feedback, interview scoring, or real-time hints from n8n nodes.
 *
 * Current State: Disabled placeholder banner with zero AI/chatbot logic or API keys.
 */

export const AiAssistantPlaceholder: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold mb-4">
                <Workflow className="w-3.5 h-3.5 text-blue-400" />
                <span>Future Automation Ready • n8n Integration Hub</span>
              </div>

              {/* Required Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>AI Interview Assistant – Coming Soon</span>
              </h2>

              {/* Required Text */}
              <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                An AI-powered interview assistant will be available soon.
              </p>

              {/* Contextual student perks to anticipate */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Real-time answer critique & STAR evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Personalized feedback via n8n automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>Voice & speech confidence assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>Custom question recommendations</span>
                </div>
              </div>
            </div>

            {/* Placeholder CTA Card */}
            <div className="w-full lg:w-auto shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-3 shadow-inner">
                <Bot className="w-7 h-7" />
              </div>
              <h4 className="text-white font-bold text-sm">Under Development</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-[200px]">
                Integration via n8n workflow in subsequent update.
              </p>

              {/* Required Disabled / Placeholder button: "Coming Soon" */}
              <button
                disabled
                aria-disabled="true"
                className="mt-4 w-full px-6 py-2.5 rounded-xl bg-slate-700/80 text-slate-400 font-semibold text-xs border border-slate-600 cursor-not-allowed flex items-center justify-center gap-2 shadow-inner"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                <span>Coming Soon</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
