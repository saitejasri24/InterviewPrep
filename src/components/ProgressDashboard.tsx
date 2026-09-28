import React from 'react';
import {
  BarChart3,
  CheckCircle2,
  Brain,
  Video,
  Layers,
  TrendingUp,
  Award,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { technicalQuestionsData } from '../data/technicalQuestions';
import { hrQuestionsData } from '../data/hrQuestions';

export const ProgressDashboard: React.FC<{ onNavigate: (tab: any) => void }> = ({ onNavigate }) => {
  const { progress, resetProgress, loadSampleData } = useProgress();

  const techPracticed = progress.practicedQuestionIds.length;
  const hrPracticed = progress.practicedHRQuestionIds.length;
  const totalQuestionsPracticed = techPracticed + hrPracticed;

  // Aptitude score: default to 80% if not yet attempted or progress.latestAptitudeScore
  const aptitudeScore = progress.latestAptitudeScore !== null ? progress.latestAptitudeScore : 80;

  // Mock Interviews completed:
  const mockCount = progress.mockInterviewsCompleted;

  // Topics completed calculation:
  // Distinct topics covered (Java, Python, C, JavaScript, HTML & CSS, SQL, DS, DBMS, Networks, HR)
  const allCategories = [
    'Java',
    'Python',
    'C',
    'JavaScript',
    'HTML & CSS',
    'SQL',
    'Data Structures',
    'DBMS',
    'Computer Networks',
    'HR Behavioral',
  ];

  const completedCategoriesCount = allCategories.filter((cat) => {
    if (cat === 'HR Behavioral') {
      return hrPracticed >= 2;
    }
    const catQuestions = technicalQuestionsData.filter((q) => q.category === cat);
    const practicedInCat = catQuestions.filter((q) =>
      progress.practicedQuestionIds.includes(q.id)
    ).length;
    return practicedInCat >= 1;
  }).length;

  const topicsCompletedText = `${completedCategoriesCount}/10`;

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Student Analytics & Milestone Tracking</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Preparation Progress Dashboard
              </h1>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Monitor your daily preparation consistency, test scores, interview simulations, and
                mastery across core technical topics.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={loadSampleData}
                className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer border border-blue-200"
                title="Populate realistic sample progress stats"
              >
                Load Sample Data
              </button>
              <button
                onClick={resetProgress}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors cursor-pointer"
                title="Reset all progress tracking"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* 4 PRIMARY STATISTIC CARDS (Exact match to brief requirements) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Questions Practiced */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Questions Practiced
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">
                {totalQuestionsPracticed}
              </span>
              <span className="text-xs text-slate-500 font-medium">solved</span>
            </div>
            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-[11px] text-slate-500 mb-1 font-medium">
                <span>Technical: {techPracticed}</span>
                <span>HR: {hrPracticed}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (totalQuestionsPracticed / 30) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Aptitude Score */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-sky-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Aptitude Score
              </span>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-sky-600">
                {aptitudeScore}%
              </span>
              <span className="text-xs text-slate-500 font-medium">accuracy</span>
            </div>
            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-[11px] text-slate-500 mb-1 font-medium">
                <span>Screening Benchmark</span>
                <span>Target: 75%+</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${aptitudeScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Mock Interviews Completed */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mock Interviews Completed
              </span>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-indigo-600">
                {mockCount}
              </span>
              <span className="text-xs text-slate-500 font-medium">sessions</span>
            </div>
            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-[11px] text-slate-500 mb-1 font-medium">
                <span>Readiness Stage</span>
                <span>{mockCount >= 3 ? 'Exam Ready' : 'In Progress'}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (mockCount / 5) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 4: Topics Completed */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Topics Completed
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                {topicsCompletedText}
              </span>
              <span className="text-xs text-slate-500 font-medium">modules</span>
            </div>
            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-[11px] text-slate-500 mb-1 font-medium">
                <span>Curriculum Depth</span>
                <span>{completedCategoriesCount * 10}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${completedCategoriesCount * 10}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Domain Mastery Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Topic Mastery Breakdown
              </h3>
              <span className="text-xs text-slate-500">Based on questions practiced</span>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Java', total: 4, practiced: progress.practicedQuestionIds.filter((id) => id.includes('java')).length },
                { name: 'Python', total: 3, practiced: progress.practicedQuestionIds.filter((id) => id.includes('py')).length },
                { name: 'C Language', total: 2, practiced: progress.practicedQuestionIds.filter((id) => id.includes('c-')).length },
                { name: 'JavaScript', total: 3, practiced: progress.practicedQuestionIds.filter((id) => id.includes('js')).length },
                { name: 'SQL & DBMS', total: 6, practiced: progress.practicedQuestionIds.filter((id) => id.includes('sql') || id.includes('dbms')).length },
                { name: 'Data Structures', total: 3, practiced: progress.practicedQuestionIds.filter((id) => id.includes('ds')).length },
                { name: 'Computer Networks', total: 3, practiced: progress.practicedQuestionIds.filter((id) => id.includes('cn')).length },
                { name: 'HR Behavioral Rounds', total: 10, practiced: hrPracticed },
              ].map((item) => {
                const pct = Math.min(100, Math.round((item.practiced / item.total) * 100));
                return (
                  <div key={item.name}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{item.name}</span>
                      <span className="text-slate-500 font-normal">
                        {item.practiced}/{item.total} practiced ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Recent Activity & Quick Action Launcher */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Box */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Next Recommended Step</span>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Simulate a Technical Mock Round
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-5">
                Put your Java, SQL, and Data Structure preparation into action with a timed 5-question
                technical mock interview.
              </p>
              <button
                onClick={() => onNavigate('mock')}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Launch Mock Interview</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Recent Mock Interview Log */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center justify-between">
                <span>Recent Mock Sessions</span>
                <span className="text-xs text-slate-400 font-normal">History</span>
              </h4>

              {progress.recentMockSessions.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">
                  No mock sessions recorded yet. Start one from the Mock Interview tab!
                </div>
              ) : (
                <div className="space-y-3">
                  {progress.recentMockSessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-800">{session.type}</p>
                        <p className="text-slate-500 text-[11px]">{session.date}</p>
                      </div>
                      <span className="px-2 py-1 rounded bg-blue-100/70 text-blue-700 font-bold text-[11px]">
                        {session.answeredCount} / {session.totalQuestions} answered
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
