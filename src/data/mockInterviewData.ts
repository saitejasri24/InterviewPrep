import { MockQuestionItem } from '../types';

export const mockQuestionsPool: MockQuestionItem[] = [
  // Technical Mock Questions
  {
    id: 'mock-t1',
    type: 'Technical',
    category: 'Data Structures & Algorithms',
    question: 'How would you detect a cycle in a singly linked list? Describe your approach and its time and space complexity.',
    suggestedPoints: [
      "Mention Floyd's Cycle-Finding Algorithm (Tortoise and Hare approach).",
      'Use two pointers: slow moving 1 step and fast moving 2 steps.',
      'If fast reaches NULL, there is no cycle. If slow == fast, a cycle exists.',
      'Time complexity: O(N), Space complexity: O(1).',
      'Alternative hash table approach: O(N) time and O(N) extra space.',
    ],
  },
  {
    id: 'mock-t2',
    type: 'Technical',
    category: 'Databases & SQL',
    question: 'Explain what indexing is in databases. When would you avoid adding an index to a column?',
    suggestedPoints: [
      'An index is a data structure (B-tree / Hash) that speeds up data retrieval without scanning every row.',
      'Speeds up SELECT queries with WHERE, JOIN, and ORDER BY clauses.',
      'Downside: Adds overhead to write operations (INSERT, UPDATE, DELETE).',
      'Avoid on columns with very low cardinality (e.g. boolean flags like is_active).',
      'Avoid on small tables or tables with extremely heavy write traffic.',
    ],
  },
  {
    id: 'mock-t3',
    type: 'Technical',
    category: 'Object Oriented Programming',
    question: 'What is polymorphism in Object Oriented Programming? Differentiate between compile-time and runtime polymorphism with examples.',
    suggestedPoints: [
      'Polymorphism means "many forms" — allowing objects to be treated as instances of their parent class.',
      'Compile-time (Static): Method Overloading (same method name, different parameter signature in the same class).',
      'Runtime (Dynamic): Method Overriding (subclass provides specific implementation of method declared in parent class).',
      'Achieved via virtual tables (vtable) or dynamic dispatch.',
    ],
  },
  {
    id: 'mock-t4',
    type: 'Technical',
    category: 'Operating Systems & Networking',
    question: 'What is the difference between a process and a thread? How do they communicate?',
    suggestedPoints: [
      'A process is an executing program instance with its own independent address space and system resources.',
      'A thread is a lightweight execution unit within a process, sharing memory, code, and data segments.',
      'Thread switching is faster than process context switching.',
      'Process communication (IPC): pipes, sockets, shared memory, message queues.',
      'Thread communication: shared memory variables, synchronized with locks/mutexes.',
    ],
  },
  {
    id: 'mock-t5',
    type: 'Technical',
    category: 'Web & Systems',
    question: 'Explain RESTful APIs. What are the common HTTP methods and their idempotency characteristics?',
    suggestedPoints: [
      'REST stands for Representational State Transfer, utilizing stateless HTTP requests.',
      'GET: Retrieve resources (Safe, Idempotent).',
      'POST: Create a new resource (Not Idempotent).',
      'PUT: Replace/update entire resource (Idempotent).',
      'DELETE: Remove resource (Idempotent).',
      'Idempotency means multiple identical requests have the exact same side-effect as a single request.',
    ],
  },

  // HR Mock Questions
  {
    id: 'mock-h1',
    type: 'HR',
    category: 'Self Introduction',
    question: 'Walk me through your resume and explain why you are interested in this position.',
    suggestedPoints: [
      'Present -> Past -> Future structure.',
      'Highlight degree, major, university, and core technical skills.',
      'Highlight 1-2 key projects or internship achievements with quantifiable impact.',
      'Explain specific alignment with the company and role.',
      'Keep it concise (around 90 to 120 seconds).',
    ],
  },
  {
    id: 'mock-h2',
    type: 'HR',
    category: 'Behavioral & Teamwork',
    question: 'Describe a situation where you had a disagreement with a project teammate. How did you resolve it?',
    suggestedPoints: [
      'STAR Framework (Situation, Task, Action, Result).',
      'Show that you listened to their perspective with an open mind.',
      'Focus on objective evidence or prototyping to resolve the debate rather than personal conflict.',
      'Highlight the successful delivery of the project.',
    ],
  },
  {
    id: 'mock-h3',
    type: 'HR',
    category: 'Adaptability & Learning',
    question: 'Tell me about a time you had to learn a completely new technology or tool under a short deadline.',
    suggestedPoints: [
      'Explain the context (hackathon, semester coursework, internship assignment).',
      'Describe your learning strategy: documentation, quick crash course, building a small prototype.',
      'Demonstrate resourcefulness and persistence.',
      'State the outcome and what you learned from the experience.',
    ],
  },
  {
    id: 'mock-h4',
    type: 'HR',
    category: 'Self Awareness',
    question: 'What is your biggest weakness, and what steps have you taken during college to improve upon it?',
    suggestedPoints: [
      'Select a genuine, non-dealbreaker professional attribute.',
      'Avoid clichés like "I am too perfectionist".',
      'Focus heavily (80% of time) on the concrete systems/tools you use to manage it.',
      'Show continuous improvement.',
    ],
  },
  {
    id: 'mock-h5',
    type: 'HR',
    category: 'Career Vision',
    question: 'Where do you see yourself professionally in three to five years?',
    suggestedPoints: [
      'Demonstrate commitment to mastering software engineering fundamentals in years 1-2.',
      'Aspire toward taking system design responsibility and mentoring junior peers by year 4-5.',
      'Align personal growth with company value creation.',
    ],
  },
];
