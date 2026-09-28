import React, { createContext, useContext, useEffect, useState } from 'react';
import { MockInterviewResult, UserProgress } from '../types';

interface ProgressContextType {
  progress: UserProgress;
  togglePracticedQuestion: (id: string) => void;
  isQuestionPracticed: (id: string) => boolean;
  toggleBookmarkedQuestion: (id: string) => void;
  isQuestionBookmarked: (id: string) => boolean;
  toggleHRQuestionPracticed: (id: string) => void;
  isHRQuestionPracticed: (id: string) => boolean;
  recordAptitudeQuiz: (percentage: number) => void;
  recordMockInterview: (result: MockInterviewResult) => void;
  toggleTipCheck: (tipId: string) => void;
  isTipChecked: (tipId: string) => boolean;
  loadSampleData: () => void;
  resetProgress: () => void;
}

const STORAGE_KEY = 'interview_prep_hub_progress_v1';

const defaultProgress: UserProgress = {
  practicedQuestionIds: ['tech-java-1', 'tech-java-2', 'tech-py-1', 'tech-js-1', 'tech-sql-2'],
  bookmarkedQuestionIds: ['tech-java-4', 'tech-cn-3'],
  practicedHRQuestionIds: ['hr-1', 'hr-2', 'hr-4'],
  completedAptitudeQuizzes: 4,
  latestAptitudeScore: 80,
  highestAptitudeScore: 90,
  mockInterviewsCompleted: 3,
  recentMockSessions: [
    {
      date: 'Yesterday',
      type: 'Technical Interview',
      totalQuestions: 5,
      answeredCount: 5,
      answers: {},
    },
    {
      date: '3 days ago',
      type: 'HR Interview',
      totalQuestions: 5,
      answeredCount: 4,
      answers: {},
    },
    {
      date: '1 week ago',
      type: 'Mixed Interview',
      totalQuestions: 5,
      answeredCount: 5,
      answers: {},
    },
  ],
  checkedTipIds: ['tip-before-1', 'tip-before-2', 'tip-during-1', 'tip-resume-1'],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const togglePracticedQuestion = (id: string) => {
    setProgress((prev) => {
      const exists = prev.practicedQuestionIds.includes(id);
      return {
        ...prev,
        practicedQuestionIds: exists
          ? prev.practicedQuestionIds.filter((item) => item !== id)
          : [...prev.practicedQuestionIds, id],
      };
    });
  };

  const isQuestionPracticed = (id: string) => {
    return progress.practicedQuestionIds.includes(id);
  };

  const toggleBookmarkedQuestion = (id: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedQuestionIds.includes(id);
      return {
        ...prev,
        bookmarkedQuestionIds: exists
          ? prev.bookmarkedQuestionIds.filter((item) => item !== id)
          : [...prev.bookmarkedQuestionIds, id],
      };
    });
  };

  const isQuestionBookmarked = (id: string) => {
    return progress.bookmarkedQuestionIds.includes(id);
  };

  const toggleHRQuestionPracticed = (id: string) => {
    setProgress((prev) => {
      const exists = prev.practicedHRQuestionIds.includes(id);
      return {
        ...prev,
        practicedHRQuestionIds: exists
          ? prev.practicedHRQuestionIds.filter((item) => item !== id)
          : [...prev.practicedHRQuestionIds, id],
      };
    });
  };

  const isHRQuestionPracticed = (id: string) => {
    return progress.practicedHRQuestionIds.includes(id);
  };

  const recordAptitudeQuiz = (percentage: number) => {
    setProgress((prev) => {
      const newCount = prev.completedAptitudeQuizzes + 1;
      const highest = prev.highestAptitudeScore !== null ? Math.max(prev.highestAptitudeScore, percentage) : percentage;
      return {
        ...prev,
        completedAptitudeQuizzes: newCount,
        latestAptitudeScore: percentage,
        highestAptitudeScore: highest,
      };
    });
  };

  const recordMockInterview = (result: MockInterviewResult) => {
    setProgress((prev) => ({
      ...prev,
      mockInterviewsCompleted: prev.mockInterviewsCompleted + 1,
      recentMockSessions: [result, ...prev.recentMockSessions].slice(0, 8),
    }));
  };

  const toggleTipCheck = (tipId: string) => {
    setProgress((prev) => {
      const exists = prev.checkedTipIds.includes(tipId);
      return {
        ...prev,
        checkedTipIds: exists
          ? prev.checkedTipIds.filter((t) => t !== tipId)
          : [...prev.checkedTipIds, tipId],
      };
    });
  };

  const isTipChecked = (tipId: string) => {
    return progress.checkedTipIds.includes(tipId);
  };

  const loadSampleData = () => {
    setProgress(defaultProgress);
  };

  const resetProgress = () => {
    const blank: UserProgress = {
      practicedQuestionIds: [],
      bookmarkedQuestionIds: [],
      practicedHRQuestionIds: [],
      completedAptitudeQuizzes: 0,
      latestAptitudeScore: null,
      highestAptitudeScore: null,
      mockInterviewsCompleted: 0,
      recentMockSessions: [],
      checkedTipIds: [],
    };
    setProgress(blank);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        togglePracticedQuestion,
        isQuestionPracticed,
        toggleBookmarkedQuestion,
        isQuestionBookmarked,
        toggleHRQuestionPracticed,
        isHRQuestionPracticed,
        recordAptitudeQuiz,
        recordMockInterview,
        toggleTipCheck,
        isTipChecked,
        loadSampleData,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
