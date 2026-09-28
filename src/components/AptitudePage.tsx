import React, { useState } from 'react';
import {
  Brain,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Award,
  Filter,
  Lightbulb,
  Sparkles,
  BarChart3,
  HelpCircle,
} from 'lucide-react';
import { AptitudeCategory, AptitudeQuestion } from '../types';
import { aptitudeQuestionsData } from '../data/aptitudeQuestions';
import { useProgress } from '../context/ProgressContext';

export const AptitudePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AptitudeCategory | 'All'>('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const { recordAptitudeQuiz } = useProgress();

  const categories: AptitudeCategory[] = [
    'Percentages',
    'Profit & Loss',
    'Time & Work',
    'Time, Speed & Distance',
    'Simple Interest',
    'Number Systems',
    'Ratios',
    'Averages',
    'Logical Reasoning',
  ];

  // Filter questions according to chosen category
  const activeQuestions =
    selectedCategory === 'All'
      ? aptitudeQuestionsData
      : aptitudeQuestionsData.filter((q) => q.category === selectedCategory);

  const currentQ: AptitudeQuestion | undefined = activeQuestions[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ || quizCompleted) return;
    setUserSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(false);
    } else {
      // Calculate score and finish
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowExplanation(false);
    }
  };

  const finishQuiz = () => {
    let correct = 0;
    activeQuestions.forEach((q) => {
      if (userSelectedAnswers[q.id] === q.correctOptionIndex) {
        correct += 1;
      }
    });
    const percentage = Math.round((correct / activeQuestions.length) * 100);
    recordAptitudeQuiz(percentage);
    setQuizCompleted(true);
  };

  const handleRestartQuiz = () => {
    setUserSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const handleCategoryChange = (cat: AptitudeCategory | 'All') => {
    setSelectedCategory(cat);
    setUserSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  // Compute final statistics
  const totalQuestions = activeQuestions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  activeQuestions.forEach((q) => {
    const selected = userSelectedAnswers[q.id];
    if (selected === undefined) {
      unattemptedCount += 1;
    } else if (selected === q.correctOptionIndex) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100) || 0;

  const getPerformanceMessage = (pct: number) => {
    if (pct >= 85) {
      return {
        title: 'Outstanding Performance!',
        text: 'You have exceptional quantitative and logical aptitude. You are well prepared for campus screening rounds!',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      };
    } else if (pct >= 65) {
      return {
        title: 'Good Effort!',
        text: 'Strong foundation! Review the questions you missed and practice speed calculation shortcuts.',
        color: 'text-blue-700 bg-blue-50 border-blue-200',
      };
    } else {
      return {
        title: 'Keep Practicing!',
        text: 'Consistent practice makes perfect. Focus on formulas for Time & Work, Percentages, and Profit & Loss.',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
      };
    }
  };

  const perfMessage = getPerformanceMessage(percentage);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2">
                <Brain className="w-3.5 h-3.5" />
                <span>Quantitative & Logical Reasoning</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Aptitude Practice Quiz
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Interactive multiple-choice tests designed to simulate campus recruitment aptitude
                screening.
              </p>
            </div>
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer self-start sm:self-center"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart Quiz</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase text-slate-500">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Category:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-sky-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Topics ({aptitudeQuestionsData.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Quiz Card or Result Screen */}
        {!quizCompleted && currentQ ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            {/* Quiz Top Status Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-sky-50 text-sky-700 border border-sky-100">
                  {currentQ.category}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-medium text-slate-500">
                  Difficulty: {currentQ.difficulty}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-700">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-sky-600 h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                <span className="text-sky-600 mr-2 font-mono">
                  {currentQuestionIndex + 1}.
                </span>
                {currentQ.question}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = userSelectedAnswers[currentQ.id] === optIdx;
                const hasAnswered = userSelectedAnswers[currentQ.id] !== undefined;
                const isCorrect = optIdx === currentQ.correctOptionIndex;

                let optionStyle =
                  'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                if (hasAnswered) {
                  if (isSelected && isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 ring-1 ring-emerald-300';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 ring-1 ring-rose-300';
                  } else if (isCorrect) {
                    optionStyle = 'bg-emerald-50/60 border-emerald-200 text-emerald-800';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0 text-slate-700">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {hasAnswered && (
                      <div>
                        {isSelected && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        )}
                        {isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                        {!isSelected && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 opacity-60" />
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Optional Immediate Explanation Toggle */}
            {userSelectedAnswers[currentQ.id] !== undefined && (
              <div className="mb-6">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>{showExplanation ? 'Hide Explanation' : 'View Step-by-Step Solution'}</span>
                </button>
                {showExplanation && (
                  <div className="mt-2.5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-mono">
                    {currentQ.explanation}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* RESULT DISPLAY SCREEN */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Quiz Completed
            </h2>

            {/* Score Highlight as specified: Your Score: 8/10 */}
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Your Score: <span className="text-sky-600">{correctCount}/{totalQuestions}</span>
            </p>

            <div className="text-sm font-medium text-slate-500 mb-6">
              Category: {selectedCategory}
            </div>

            {/* Performance message */}
            <div
              className={`p-4 rounded-2xl border text-sm max-w-lg mx-auto mb-8 font-medium ${perfMessage.color}`}
            >
              <p className="font-bold text-base mb-1">{perfMessage.title}</p>
              <p>{perfMessage.text}</p>
            </div>

            {/* Required Breakdown: Correct Answers, Incorrect Answers, Percentage */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-emerald-700">
                  {correctCount}
                </span>
                <span className="text-xs font-semibold text-emerald-800">
                  Correct Answers
                </span>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-rose-700">
                  {incorrectCount}
                </span>
                <span className="text-xs font-semibold text-rose-800">
                  Incorrect Answers
                </span>
              </div>

              <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl">
                <span className="block text-2xl font-black text-sky-700">
                  {percentage}%
                </span>
                <span className="text-xs font-semibold text-sky-800">
                  Percentage
                </span>
              </div>
            </div>

            {/* Actions: Restart Quiz or Review Detailed Answers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestartQuiz}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Quiz</span>
              </button>

              <button
                onClick={() => setQuizCompleted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Review Questions & Solutions</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
