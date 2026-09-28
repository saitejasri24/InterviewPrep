import React, { useState } from 'react';
import {
  Users2,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Copy,
  Check,
  Edit3,
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { hrQuestionsData } from '../data/hrQuestions';
import { useProgress } from '../context/ProgressContext';

export const HRPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(hrQuestionsData[0].id);
  const [userNotes, setUserNotes] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('hr_student_notes');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { isHRQuestionPracticed, toggleHRQuestionPracticed } = useProgress();

  const handleSaveNotes = (id: string, text: string) => {
    const updated = { ...userNotes, [id]: text };
    setUserNotes(updated);
    try {
      localStorage.setItem('hr_student_notes', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredQuestions = hrQuestionsData.filter((q) => {
    const query = searchQuery.toLowerCase();
    return (
      q.question.toLowerCase().includes(query) ||
      q.category?.toLowerCase().includes(query) ||
      q.sampleAnswer.toLowerCase().includes(query)
    );
  });

  const activeQuestion =
    hrQuestionsData.find((q) => q.id === selectedQuestionId) || hrQuestionsData[0];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
                <Users2 className="w-3.5 h-3.5" />
                <span>Behavioral & Campus HR Preparation</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                HR Interview Questions & Answers
              </h1>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Learn the strategy behind behavioral questions, read high-impact fresher sample
                answers, and customize your own responses for interview day.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="text-xs text-slate-500 block">Common HR Questions</span>
              <span className="text-2xl font-black text-indigo-600">
                {hrQuestionsData.length} Essential
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search HR questions (e.g. weaknesses, team, 5 years, pressure)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Dual Column Layout: Left List, Right Active Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Question Navigator */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Index ({filteredQuestions.length})
              </span>
            </div>

            <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
              {filteredQuestions.map((q, index) => {
                const isSelected = q.id === activeQuestion.id;
                const practiced = isHRQuestionPracticed(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 font-bold ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm line-clamp-2 leading-snug">{q.question}</p>
                      {q.category && (
                        <span
                          className={`text-[10px] mt-1 inline-block ${
                            isSelected ? 'text-indigo-200' : 'text-slate-400'
                          }`}
                        >
                          {q.category}
                        </span>
                      )}
                    </div>
                    {practiced && (
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-white' : 'text-emerald-600'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Full Details for Active Question */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 inline-block mb-2">
                    {activeQuestion.category || 'HR Round'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {activeQuestion.question}
                  </h2>
                </div>

                <button
                  onClick={() => toggleHRQuestionPracticed(activeQuestion.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                    isHRQuestionPracticed(activeQuestion.id)
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      isHRQuestionPracticed(activeQuestion.id)
                        ? 'text-emerald-600'
                        : 'text-slate-400'
                    }`}
                  />
                  <span>
                    {isHRQuestionPracticed(activeQuestion.id)
                      ? 'Practiced & Mastered'
                      : 'Mark as Practiced'}
                  </span>
                </button>
              </div>

              {/* Section 1: How to Answer */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>How to Answer</span>
                </h3>
                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 text-sm text-slate-700 leading-relaxed font-normal">
                  {activeQuestion.howToAnswer}
                </div>
              </div>

              {/* Section 2: Sample Answer */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Sample Answer (Fresher Friendly)</span>
                  </h3>
                  <button
                    onClick={() => handleCopy(activeQuestion.id, activeQuestion.sampleAnswer)}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 cursor-pointer"
                  >
                    {copiedId === activeQuestion.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Sample</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-900 text-slate-100 p-5 rounded-xl text-sm leading-relaxed whitespace-pre-line font-sans border border-slate-800">
                  {activeQuestion.sampleAnswer}
                </div>
              </div>

              {/* Section 3: Important Tips */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Important Tips</span>
                </h3>
                <ul className="space-y-2">
                  {activeQuestion.importantTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: Student Custom Answer Workspace */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="student-notes"
                    className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2"
                  >
                    <Edit3 className="w-4 h-4 text-blue-600" />
                    <span>Draft Your Personal Answer</span>
                  </label>
                  <span className="text-[11px] text-slate-400">Saved automatically</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">
                  Personalize with your specific college project, major, or story so you are ready
                  on interview day.
                </p>
                <textarea
                  id="student-notes"
                  rows={4}
                  value={userNotes[activeQuestion.id] || ''}
                  onChange={(e) => handleSaveNotes(activeQuestion.id, e.target.value)}
                  placeholder="Type your own customized response here (e.g., 'My name is Sarah, I built an IoT weather monitoring station in 3rd year...')"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800 leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
