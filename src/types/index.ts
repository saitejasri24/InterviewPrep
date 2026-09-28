export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type TechnicalCategory =
  | 'Java'
  | 'Python'
  | 'C'
  | 'JavaScript'
  | 'HTML & CSS'
  | 'SQL'
  | 'Data Structures'
  | 'DBMS'
  | 'Computer Networks';

export interface TechnicalQuestion {
  id: string;
  category: TechnicalCategory;
  question: string;
  difficulty: Difficulty;
  answer: string;
  codeSnippet?: string;
  keyPoints?: string[];
}

export interface HRQuestion {
  id: string;
  question: string;
  category?: string;
  howToAnswer: string;
  sampleAnswer: string;
  importantTips: string[];
}

export type AptitudeCategory =
  | 'Percentages'
  | 'Profit & Loss'
  | 'Time & Work'
  | 'Time, Speed & Distance'
  | 'Simple Interest'
  | 'Number Systems'
  | 'Ratios'
  | 'Averages'
  | 'Logical Reasoning';

export interface AptitudeQuestion {
  id: string;
  category: AptitudeCategory;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: Difficulty;
}

export type MockInterviewType = 'Technical Interview' | 'HR Interview' | 'Mixed Interview';

export interface MockQuestionItem {
  id: string;
  question: string;
  category: string;
  type: 'Technical' | 'HR';
  suggestedPoints: string[];
}

export interface MockInterviewResult {
  date: string;
  type: MockInterviewType;
  totalQuestions: number;
  answeredCount: number;
  answers: { [questionId: string]: string };
}

export interface UserProgress {
  practicedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  practicedHRQuestionIds: string[];
  completedAptitudeQuizzes: number;
  latestAptitudeScore: number | null; // percentage e.g. 80
  highestAptitudeScore: number | null;
  mockInterviewsCompleted: number;
  recentMockSessions: MockInterviewResult[];
  checkedTipIds: string[];
}

export type ActiveTab =
  | 'home'
  | 'technical'
  | 'hr'
  | 'aptitude'
  | 'tips'
  | 'mock'
  | 'progress';
