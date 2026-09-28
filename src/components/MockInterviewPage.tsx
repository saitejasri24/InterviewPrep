import React, { useState, useEffect } from 'react';
import {
  Video,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Award,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Workflow,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { MockInterviewType, MockQuestionItem, MockInterviewResult } from '../types';
import { mockQuestionsPool } from '../data/mockInterviewData';
import { useProgress } from '../context/ProgressContext';

export const MockInterviewPage: React.FC = () => {
  const [interviewType, setInterviewType] = useState<MockInterviewType>('Technical Interview');
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [qId: string]: string }>({});
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [expandedAnswerId, setExpandedAnswerId] = useState<string | null>(null);

  const { recordMockInterview } = useProgress();

  // Filter pool by interview type
  const sessionQuestions: MockQuestionItem[] = React.useMemo(() => {
    if (interviewType === 'Technical Interview') {
      return mockQuestionsPool.filter((q) => q.type === 'Technical');
    }
    if (interviewType === 'HR Interview') {
      return mockQuestionsPool.filter((q) => q.type === 'HR');
    }
    return mockQuestionsPool; // Mixed
  }, [interviewType]);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isSessionActive && isTimerRunning && !isFinished) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive, isTimerRunning, isFinished]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleStartSession = (type: MockInterviewType) => {
    setInterviewType(type);
    setIsSessionActive(true);
    setCurrentIndex(0);
    setAnswers({});
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setIsFinished(false);
    setShowHint(false);
  };

  const handleAnswerChange = (qId: string, text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: text,
    }));
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowHint(false);
    } else {
      finishInterview();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowHint(false);
    }
  };

  const finishInterview = () => {
    setIsTimerRunning(false);
    setIsFinished(true);

    const answeredCount = Object.values(answers).filter((val) => val.trim().length > 0).length;

    const result: MockInterviewResult = {
      date: 'Just now',
      type: interviewType,
      totalQuestions: sessionQuestions.length,
      answeredCount,
      answers,
    };

    recordMockInterview(result);

    /**
     * FUTURE n8n WEBHOOK DISPATCH POINT:
     * When you are ready to evaluate candidates using n8n:
     * fetch('https://your-n8n-instance/webhook/interview-evaluator', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({
     *     interviewType,
     *     timeSpentSeconds: timerSeconds,
     *     responses: sessionQuestions.map(q => ({
     *       question: q.question,
     *       candidateAnswer: answers[q.id] || ''
     *     }))
     *   })
     * });
     */
  };

  const handleReset = () => {
    setIsSessionActive(false);
    setIsFinished(false);
    setCurrentIndex(0);
    setAnswers({});
    setTimerSeconds(0);
  };

  const currentQ = sessionQuestions[currentIndex];
  const currentAnswer = currentQ ? answers[currentQ.id] || '' : '';
  const answeredCount = Object.values(answers).filter((val) => val.trim().length > 0).length;

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                <Video className="w-3.5 h-3.5" />
                <span>Simulated Interview Practice</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Mock Interview Simulation
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Practice answering high-probability questions under timed conditions to refine your
                thought structuring and communication.
              </p>
            </div>

            {isSessionActive && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer self-start sm:self-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Exit Simulation</span>
              </button>
            )}
          </div>
        </div>

        {/* STEP 1: INTERVIEW SELECTION (If not yet active) */}
        {!isSessionActive ? (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Select Your Interview Type
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Choose the round you wish to practice today. Questions will be presented one at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Technical Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Technical Interview
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Algorithms, SQL, Data Structures, OOP, and Operating System fundamentals.
                  </p>
                  <div className="mt-4 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    5 Curated Questions
                  </div>
                </div>
                <button
                  onClick={() => handleStartSession('Technical Interview')}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start Technical Mock</span>
                </button>
              </div>

              {/* HR Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-400 hover:shadow-lg transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    HR Interview
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Behavioral scenarios, STAR storytelling, teamwork, conflict, and strengths.
                  </p>
                  <div className="mt-4 text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md inline-block">
                    5 Curated Questions
                  </div>
                </div>
                <button
                  onClick={() => handleStartSession('HR Interview')}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start HR Mock</span>
                </button>
              </div>

              {/* Mixed Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-purple-400 hover:shadow-lg transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Mixed Interview
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    A comprehensive simulation combining both technical and behavioral questions.
                  </p>
                  <div className="mt-4 text-[11px] font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md inline-block">
                    10 Combined Questions
                  </div>
                </div>
                <button
                  onClick={() => handleStartSession('Mixed Interview')}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start Mixed Mock</span>
                </button>
              </div>
            </div>

            {/* n8n Architecture Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
              <Workflow className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">Extensible Architecture: </span>
                This mock interview runner is modularized to support direct connection to an external
                n8n automation webhook. When connected, answers can be routed to your evaluation
                pipeline effortlessly.
              </div>
            </div>
          </div>
        ) : !isFinished && currentQ ? (
          /* STEP 2: ACTIVE QUESTION SCREEN */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            {/* Top Bar with Timer and Progress */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                  {currentQ.type}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {currentQ.category}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Timer */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{formatTime(timerSeconds)}</span>
                </div>

                <div className="text-xs font-bold text-slate-700">
                  Question {currentIndex + 1} of {sessionQuestions.length}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%`,
                }}
              />
            </div>

            {/* Question Display */}
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Interview Question:
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>
            </div>

            {/* Required Answer Text Area */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="mock-answer"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Your Answer / Response Notes
                </label>
                <span className="text-xs text-slate-400">
                  {currentAnswer.length} characters
                </span>
              </div>
              <textarea
                id="mock-answer"
                rows={7}
                value={currentAnswer}
                onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                placeholder="Type your response here as if speaking to the interviewer... Outline your main point, supporting reasoning, and code/project examples."
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 leading-relaxed font-sans"
              />
            </div>

            {/* Optional Talking Points / Hints */}
            <div className="mb-6">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{showHint ? 'Hide Talking Points' : 'Show Key Talking Points to Include'}</span>
              </button>
              {showHint && (
                <div className="mt-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5 animate-in fade-in duration-150">
                  <p className="font-bold text-blue-900 mb-1">Key Topics Interviewers Look For:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    {currentQ.suggestedPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              {/* Next Question button */}
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {currentIndex === sessionQuestions.length - 1
                    ? 'Finish Interview'
                    : 'Next Question'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* STEP 3: INTERVIEW COMPLETION SCREEN */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Session Complete
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Mock Interview Finished!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Completed {interviewType} in {formatTime(timerSeconds)}
              </p>
            </div>

            {/* Required Metric: Number of questions answered */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-blue-700">
                  {answeredCount} / {sessionQuestions.length}
                </span>
                <span className="text-xs font-semibold text-blue-800">
                  Questions Answered
                </span>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-emerald-700">
                  {sessionQuestions.length}
                </span>
                <span className="text-xs font-semibold text-emerald-800">
                  Total Questions
                </span>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-purple-700">
                  {formatTime(timerSeconds)}
                </span>
                <span className="text-xs font-semibold text-purple-800">
                  Time Taken
                </span>
              </div>
            </div>

            {/* Required Section: Questions Attempted */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Questions Attempted Review</span>
              </h4>
              <div className="space-y-3">
                {sessionQuestions.map((q, idx) => {
                  const candidateAnswer = answers[q.id] || '';
                  const hasAnswer = candidateAnswer.trim().length > 0;
                  const isExpanded = expandedAnswerId === q.id;

                  return (
                    <div
                      key={q.id}
                      className="border border-slate-200 rounded-xl p-4 bg-slate-50/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                              hasAnswer
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900">
                              {q.question}
                            </p>
                            <span className="text-[11px] text-slate-500 font-medium">
                              {q.category} • {hasAnswer ? 'Answer Provided' : 'Skipped/Blank'}
                            </span>
                          </div>
                        </div>

                        {hasAnswer && (
                          <button
                            onClick={() =>
                              setExpandedAnswerId(isExpanded ? null : q.id)
                            }
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 cursor-pointer shrink-0"
                          >
                            <span>{isExpanded ? 'Hide' : 'View Notes'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>

                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700 bg-white p-3 rounded-lg leading-relaxed whitespace-pre-line">
                          {candidateAnswer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Required Section: Preparation Checklist */}
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Preparation Checklist & Self-Evaluation</span>
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Score your own performance before your real interview drive:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <label className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-indigo-100 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span>Structured response (Point &rarr; Reason &rarr; Example)</span>
                </label>
                <label className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-indigo-100 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span>Maintained steady speaking pace without filler words</span>
                </label>
                <label className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-indigo-100 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span>Referenced genuine projects, numbers, or coursework</span>
                </label>
                <label className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-indigo-100 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                  <span>Discussed edge cases & algorithmic trade-offs</span>
                </label>
              </div>
            </div>

            {/* Final Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Practice Another Mock Round</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
