import { AptitudeQuestion } from '../types';

export const aptitudeQuestionsData: AptitudeQuestion[] = [
  // --- PERCENTAGES ---
  {
    id: 'apt-perc-1',
    category: 'Percentages',
    question:
      'If the price of a laptop increases by 20% and then decreases by 20%, what is the net change in its original price?',
    options: ['0% (No change)', '4% decrease', '4% increase', '2% decrease'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Let the original price be 100.\n1. After a 20% increase: 100 + 20 = 120.\n2. After a 20% decrease on 120: 120 - (20% of 120) = 120 - 24 = 96.\nNet change = 100 - 96 = 4 decrease, which is a 4% decrease.\nFormula: Net change = - (x²/100)% = - (20²/100)% = -4%.',
  },
  {
    id: 'apt-perc-2',
    category: 'Percentages',
    question:
      'In an exam, a student requires 40% marks to pass. If an examinee scores 178 marks and fails by 22 marks, what are the maximum marks?',
    options: ['400', '450', '500', '600'],
    correctOptionIndex: 2,
    difficulty: 'Easy',
    explanation:
      'Passing marks = Scored marks + Failed by marks = 178 + 22 = 200 marks.\nSince 40% of Maximum Marks = 200:\nMaximum Marks = (200 / 40) × 100 = 5 × 100 = 500.',
  },

  // --- PROFIT & LOSS ---
  {
    id: 'apt-pl-1',
    category: 'Profit & Loss',
    question:
      'A shopkeeper sells an article for $840 at a profit of 20%. What was the cost price (CP) of the article?',
    options: ['$680', '$700', '$720', '$750'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Selling Price (SP) = CP × (1 + Profit% / 100)\n840 = CP × (1 + 0.20) = CP × 1.2\nCP = 840 / 1.2 = $700.',
  },
  {
    id: 'apt-pl-2',
    category: 'Profit & Loss',
    question:
      'If the cost price of 12 pens is equal to the selling price of 8 pens, what is the profit percentage?',
    options: ['25%', '33.33%', '50%', '66.67%'],
    correctOptionIndex: 2,
    difficulty: 'Medium',
    explanation:
      'Given: 12 × CP = 8 × SP  =>  SP / CP = 12 / 8 = 3 / 2.\nProfit% = ((SP - CP) / CP) × 100 = ((3 - 2) / 2) × 100 = (1/2) × 100 = 50%.',
  },

  // --- TIME & WORK ---
  {
    id: 'apt-tw-1',
    category: 'Time & Work',
    question:
      'A can complete a project in 12 days and B can complete the same project in 24 days. Working together, in how many days can they finish it?',
    options: ['6 days', '8 days', '10 days', '18 days'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      "A's 1-day work = 1/12\nB's 1-day work = 1/24\nCombined 1-day work = 1/12 + 1/24 = 2/24 + 1/24 = 3/24 = 1/8.\nTherefore, together they will finish the project in 8 days.\nAlternative shortcut: (A × B) / (A + B) = (12 × 24) / (12 + 24) = 288 / 36 = 8 days.",
  },
  {
    id: 'apt-tw-2',
    category: 'Time & Work',
    question:
      'A and B together can do a piece of work in 10 days. If A alone can do it in 15 days, how many days will B alone take?',
    options: ['20 days', '25 days', '30 days', '35 days'],
    correctOptionIndex: 2,
    difficulty: 'Medium',
    explanation:
      "(A + B)'s 1-day work = 1/10\nA's 1-day work = 1/15\nB's 1-day work = 1/10 - 1/15 = (3 - 2)/30 = 1/30.\nHence, B alone takes 30 days.",
  },

  // --- TIME, SPEED & DISTANCE ---
  {
    id: 'apt-tsd-1',
    category: 'Time, Speed & Distance',
    question:
      'A train 180 meters long is traveling at a speed of 54 km/h. How many seconds will it take to cross a signal post?',
    options: ['10 seconds', '12 seconds', '15 seconds', '18 seconds'],
    correctOptionIndex: 1,
    difficulty: 'Medium',
    explanation:
      'Convert speed from km/h to m/s:\nSpeed = 54 × (5/18) = 3 × 5 = 15 m/s.\nDistance to cross a point object = Length of train = 180 m.\nTime = Distance / Speed = 180 / 15 = 12 seconds.',
  },
  {
    id: 'apt-tsd-2',
    category: 'Time, Speed & Distance',
    question:
      'A car travels from city A to city B at 60 km/h and returns from B to A at 40 km/h. What is the average speed of the car for the entire journey?',
    options: ['48 km/h', '50 km/h', '52 km/h', '54 km/h'],
    correctOptionIndex: 0,
    difficulty: 'Medium',
    explanation:
      'When distances are equal, Average Speed = (2 × s1 × s2) / (s1 + s2).\nAverage Speed = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 km/h.\nNote: Simple arithmetic average (60 + 40)/2 = 50 is incorrect because the car spends more time traveling at the slower speed.',
  },

  // --- SIMPLE INTEREST ---
  {
    id: 'apt-si-1',
    category: 'Simple Interest',
    question:
      'What is the Simple Interest on an investment of $5,000 at an annual rate of 8% for 3 years?',
    options: ['$1,000', '$1,200', '$1,400', '$1,600'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Simple Interest (SI) = (P × R × T) / 100\nSI = (5000 × 8 × 3) / 100 = 50 × 24 = $1,200.',
  },
  {
    id: 'apt-si-2',
    category: 'Simple Interest',
    question:
      'A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?',
    options: ['10%', '12.5%', '14%', '15%'],
    correctOptionIndex: 1,
    difficulty: 'Medium',
    explanation:
      'If the sum doubles, Interest earned = Principal (P).\nSI = (P × R × T) / 100  =>  P = (P × R × 8) / 100\n1 = 8R / 100  =>  R = 100 / 8 = 12.5%.',
  },

  // --- NUMBER SYSTEMS ---
  {
    id: 'apt-ns-1',
    category: 'Number Systems',
    question:
      'What is the unit digit in the product: (784 × 618 × 917 × 463)?',
    options: ['2', '4', '6', '8'],
    correctOptionIndex: 0,
    difficulty: 'Easy',
    explanation:
      'Multiply only the unit digits:\n4 × 8 = 32 (unit digit 2)\n2 × 7 = 14 (unit digit 4)\n4 × 3 = 12 (unit digit 2).\nTherefore, the unit digit is 2.',
  },
  {
    id: 'apt-ns-2',
    category: 'Number Systems',
    question:
      'Which of the following numbers is divisible by 9?',
    options: ['54,821', '68,238', '47,152', '89,413'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Divisibility rule for 9: The sum of digits must be divisible by 9.\n- 54821: 5+4+8+2+1 = 20 (No)\n- 68238: 6+8+2+3+8 = 27 (27 / 9 = 3, Yes!)\n- 47152: 4+7+1+5+2 = 19 (No)\n- 89413: 8+9+4+1+3 = 25 (No).',
  },

  // --- RATIOS ---
  {
    id: 'apt-rat-1',
    category: 'Ratios',
    question:
      'If A : B = 3 : 4 and B : C = 8 : 9, then what is the ratio A : C?',
    options: ['1 : 2', '2 : 3', '3 : 5', '4 : 5'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'A / C = (A / B) × (B / C) = (3 / 4) × (8 / 9) = (3 × 8) / (4 × 9) = 24 / 36 = 2 / 3.\nTherefore, A : C = 2 : 3.',
  },
  {
    id: 'apt-rat-2',
    category: 'Ratios',
    question:
      'Divide $1,050 among X, Y, and Z in the ratio 2 : 3 : 5. What is the share of Y?',
    options: ['$210', '$315', '$420', '$525'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Total parts = 2 + 3 + 5 = 10 parts.\nValue of 1 part = 1050 / 10 = $105.\nShare of Y = 3 parts = 3 × 105 = $315.',
  },

  // --- AVERAGES ---
  {
    id: 'apt-avg-1',
    category: 'Averages',
    question:
      'The average score of 5 students in a test is 74. If the marks of four students are 68, 72, 80, and 76, what is the mark of the 5th student?',
    options: ['70', '74', '75', '78'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'Total score of 5 students = 5 × 74 = 370.\nSum of 4 known students = 68 + 72 + 80 + 76 = 296.\n5th student marks = 370 - 296 = 74.',
  },

  // --- LOGICAL REASONING ---
  {
    id: 'apt-lr-1',
    category: 'Logical Reasoning',
    question:
      'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
    options: ['7', '10', '12', '13'],
    correctOptionIndex: 1,
    difficulty: 'Easy',
    explanation:
      'This is an alternating addition and subtraction series: +3, -2, +3, -2, +3, -2 ...\n7 + 3 = 10\n10 - 2 = 8\n8 + 3 = 11\n11 - 2 = 9\n9 + 3 = 12\n12 - 2 = 10.\nNext number is 10.',
  },
  {
    id: 'apt-lr-2',
    category: 'Logical Reasoning',
    question:
      'If in a certain code, "BRAIN" is written as "CQDLP", how is "SMART" written in that code?',
    options: ['TOGTU', 'UODSV', 'TNCSV', 'TODTV'],
    correctOptionIndex: 3,
    difficulty: 'Medium',
    explanation:
      'Let us analyze the letter shift:\nB (+1) -> C\nR (-1) -> Q\nA (+3) -> D\nI (+3) -> L\nN (+2) -> P\nWait, look closer at alphabet positions:\nB(2)+1=C(3), R(18)-1=Q(17), A(1)+3=D(4), I(9)+3=L(12), N(14)+2=P(16). Or pattern: +1, -1, +3, +3, +2.\nLet us test the standard shift pattern (+1, -1, +1, -1, ...):\nNotice for SMART:\nS(+1) = T\nM(+2) = O\nA(+3) = D\nR(+2) = T\nT(+2) = V\nHere: S->T, M->O, A->D, R->T, T->V gives "TODTV".',
  },
];
