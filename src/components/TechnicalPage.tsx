import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  CheckCircle,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { TechnicalCategory, Difficulty } from '../types';
import { technicalQuestionsData } from '../data/technicalQuestions';
import { useProgress } from '../context/ProgressContext';

export const TechnicalPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TechnicalCategory | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'tech-java-1': true, // Keep example open by default
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const {
    isQuestionPracticed,
    togglePracticedQuestion,
    isQuestionBookmarked,
    toggleBookmarkedQuestion,
  } = useProgress();

  const categories: TechnicalCategory[] = [
    'Java',
    'Python',
    'C',
    'JavaScript',
    'HTML & CSS',
    'SQL',
    'Data Structures',
    'DBMS',
    'Computer Networks',
  ];

  const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  const toggleAnswer = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredQuestions = useMemo(() => {
    return technicalQuestionsData.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const difficultyColors: Record<Difficulty, string> = {
    Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Medium: 'bg-amber-50 text-amber-700 border-amber-200',
    Hard: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Coding & Core CS Concepts</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Technical Interview Questions
              </h1>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Master core fundamentals, algorithms, database queries, and system concepts tested
                in campus recruitment rounds and coding interviews.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="text-xs text-slate-500 block">Total Curated Questions</span>
              <span className="text-2xl font-black text-blue-600">
                {technicalQuestionsData.length}
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
              placeholder="Search by topic, keyword, or concept (e.g., inheritance, pointer, ACID, flexbox)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium px-2 py-1 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase text-slate-500">
              <Filter className="w-3.5 h-3.5" />
              <span>Category Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Categories ({technicalQuestionsData.length})
              </button>
              {categories.map((cat) => {
                const count = technicalQuestionsData.filter((q) => q.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-slate-500">Difficulty:</span>
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                <button
                  onClick={() => setSelectedDifficulty('All')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    selectedDifficulty === 'All' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All
                </button>
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      selectedDifficulty === diff ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{filteredQuestions.length}</span> question{filteredQuestions.length === 1 ? '' : 's'}
            </div>
          </div>
        </div>

        {/* Questions List */}
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No questions found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search keywords or switching filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((q) => {
              const isExpanded = !!expandedIds[q.id];
              const practiced = isQuestionPracticed(q.id);
              const bookmarked = isQuestionBookmarked(q.id);

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-blue-300 shadow-sm ring-1 ring-blue-100'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Question Header Card */}
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {/* Category Badge */}
                        <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {q.category}
                        </span>

                        {/* Difficulty Badge */}
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                            difficultyColors[q.difficulty]
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>

                      {/* Top Action Buttons (Mark Practiced, Bookmark) */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePracticedQuestion(q.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                            practiced
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                          title={practiced ? 'Marked as Practiced' : 'Mark as Practiced'}
                        >
                          <Check className={`w-3.5 h-3.5 ${practiced ? 'text-emerald-600' : 'text-slate-400'}`} />
                          <span>{practiced ? 'Practiced' : 'Mark Practiced'}</span>
                        </button>

                        <button
                          onClick={() => toggleBookmarkedQuestion(q.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            bookmarked
                              ? 'bg-amber-50 text-amber-600 border-amber-200'
                              : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-amber-500'
                          }`}
                          title={bookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Question Title */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        <span className="text-blue-600 mr-2 font-mono">Q.</span>
                        {q.question}
                      </h3>
                    </div>

                    {/* Show Answer Action Button */}
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide Answer' : 'Show Answer'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <span className="text-xs text-slate-400">
                        {isExpanded ? 'Explanation visible' : 'Click Show Answer to view explanation'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Answer Section */}
                  {isExpanded && (
                    <div className="bg-slate-50/80 border-t border-slate-200 p-5 sm:p-6 space-y-4 animate-in fade-in duration-150">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center justify-between">
                          <span>Explanation</span>
                          <button
                            onClick={() => handleCopy(q.id, `${q.question}\n\nAnswer:\n${q.answer}`)}
                            className="inline-flex items-center gap-1 text-[11px] font-normal text-slate-500 hover:text-blue-600 cursor-pointer"
                          >
                            {copiedId === q.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Answer</span>
                              </>
                            )}
                          </button>
                        </h4>
                        <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200">
                          {q.answer}
                        </div>
                      </div>

                      {/* Code Snippet if present */}
                      {q.codeSnippet && (
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                            <span>Code Example</span>
                            <span className="font-mono text-[11px] text-blue-600">{q.category}</span>
                          </div>
                          <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-800 leading-relaxed">
                            <code>{q.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      {/* Key Points */}
                      {q.keyPoints && q.keyPoints.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                            Key Points for Interview
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {q.keyPoints.map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
