export interface TipCategoryItem {
  id: string;
  title: string;
  category: 'Before' | 'During' | 'Resume' | 'Communication' | 'Mistakes';
  description: string;
  actionPoints: string[];
  iconName: string;
}

export const interviewTipsData: TipCategoryItem[] = [
  // --- BEFORE THE INTERVIEW ---
  {
    id: 'tip-before-1',
    category: 'Before',
    title: 'Research the Company Thoroughly',
    description:
      'Interviewers immediately notice when a candidate has invested time to understand their company products, tech stack, and core mission.',
    actionPoints: [
      'Visit the company website, "About Us", and read their engineering blog or GitHub repositories.',
      'Check recent press releases, acquisitions, and new product launches over the last 6 months.',
      'Search LinkedIn to see the profiles and backgrounds of engineers or managers currently working there.',
      'Identify what problem the company solves and who their primary clients/users are.',
    ],
    iconName: 'Building2',
  },
  {
    id: 'tip-before-2',
    category: 'Before',
    title: 'Review Every Line of Your Resume',
    description:
      'Any skill, framework, or project listed on your resume is fair game. Never claim knowledge you cannot back up with technical depth.',
    actionPoints: [
      'Be prepared to explain the architecture, database schema, and challenges of every college project.',
      'Review syntax and key methods for all programming languages you have listed.',
      'Re-read your internship descriptions and formulate metrics (e.g., "% speed improvement", "users handled").',
      'Have ready explanations for any academic gaps or career shifts.',
    ],
    iconName: 'FileCheck',
  },
  {
    id: 'tip-before-3',
    category: 'Before',
    title: 'Practice Common Questions Out Loud',
    description:
      'Thinking an answer in your head is very different from speaking it articulately under time constraints.',
    actionPoints: [
      'Practice your 90-second "Tell me about yourself" elevator pitch until it feels natural, not robotic.',
      'Prepare 3 to 4 STAR method stories (Situation, Task, Action, Result) from college or projects.',
      'Record your voice or practice in front of a mirror to spot excessive filler words ("um", "like").',
    ],
    iconName: 'Mic',
  },
  {
    id: 'tip-before-4',
    category: 'Before',
    title: 'Prepare Thoughtful Questions for the Interviewer',
    description:
      'When the interviewer asks "Do you have any questions for us?", asking nothing signals lack of curiosity.',
    actionPoints: [
      'Ask: "What does a typical day look like for a junior engineer in this team?"',
      'Ask: "What tech stack or tooling will the team be focusing on over the next year?"',
      'Ask: "What onboarding or mentorship opportunities are available for freshers?"',
      'Avoid asking purely about salary or vacation days in technical rounds.',
    ],
    iconName: 'HelpCircle',
  },

  // --- DURING THE INTERVIEW ---
  {
    id: 'tip-during-1',
    category: 'During',
    title: 'Maintain Good Communication & Active Listening',
    description:
      'Clear technical communication is as important as raw coding ability in collaborative software teams.',
    actionPoints: [
      'Listen carefully and let the interviewer complete the question before jumping in to answer.',
      'Ask clarifying questions before writing code (e.g. "Can the input array contain negative numbers?").',
      'Speak your thought process aloud while solving a problem (think-out-loud protocol).',
      'Maintain steady eye contact and an engaged posture.',
    ],
    iconName: 'MessageSquare',
  },
  {
    id: 'tip-during-2',
    category: 'During',
    title: 'Be Honest When You Don’t Know an Answer',
    description:
      'Attempting to fake knowledge or guess wildly damages your credibility. Interviewers respect intellectual integrity.',
    actionPoints: [
      'Say: "I haven’t used that specific library in depth, but based on similar tools like X, my approach would be..."',
      'If completely unfamiliar, politely say: "I am not familiar with that topic yet, but I am excited to look into it right after this interview."',
      'Never fabricate facts, numbers, or technical terminology.',
    ],
    iconName: 'ShieldAlert',
  },
  {
    id: 'tip-during-3',
    category: 'During',
    title: 'Stay Confident and Keep Your Composure',
    description:
      'Interviews are conversations between professionals, not interrogations. A calm mindset unlocks clear thinking.',
    actionPoints: [
      'If you get stuck on a coding bug, take a deep breath: test small cases step-by-step.',
      'Remember that interviewers often give hints to see how well you take feedback and adjust.',
      'Keep a glass of water nearby to take a sip if you need 5 seconds to compose your thoughts.',
    ],
    iconName: 'Smile',
  },

  // --- RESUME TIPS ---
  {
    id: 'tip-resume-1',
    category: 'Resume',
    title: 'Keep Your Resume Concise (Single Page)',
    description:
      'As a college student or fresher, your resume should strictly fit on one single page. Recruiters scan it in 6 seconds.',
    actionPoints: [
      'Use a clean, single-column or clean dual-column layout with consistent margins and font size.',
      'Place Education and Technical Skills at the top, followed by Projects and Work Experience.',
      'Ensure standard PDF formatting with clickable links to your GitHub and LinkedIn profiles.',
    ],
    iconName: 'FileText',
  },
  {
    id: 'tip-resume-2',
    category: 'Resume',
    title: 'Highlight Relevant Skills & Impactful Projects',
    description:
      'List projects with concrete bullet points that highlight the problem, the technologies used, and the measurable outcome.',
    actionPoints: [
      'Use action verbs: "Architected", "Engineered", "Optimized", "Implemented", "Deployed".',
      'Include live demo links or active GitHub repository links with clean README files.',
      'Quantify results: "Reduced query times by 25%", "Supported 500+ active campus users".',
      'Avoid outdated technologies or redundant skills (e.g. MS Office) unless specifically requested.',
    ],
    iconName: 'Award',
  },

  // --- COMMUNICATION TIPS ---
  {
    id: 'tip-comm-1',
    category: 'Communication',
    title: 'Speak Clearly and Eliminate Filler Words',
    description:
      'Pacing and clarity show poise. Speaking slightly slower actually makes you sound more authoritative and thoughtful.',
    actionPoints: [
      'Pause for 2-3 seconds after a question to collect your thoughts instead of filling silence with "umm" or "like".',
      'Speak in complete, grammatically sound sentences with moderate volume.',
      'Avoid high-pitch rising intonation at the end of statements which sounds like you are unsure.',
    ],
    iconName: 'Volume2',
  },
  {
    id: 'tip-comm-2',
    category: 'Communication',
    title: 'Keep Answers Structured (Point -> Reason -> Example)',
    description:
      'Prevent rambling by adhering to a simple 3-part framework for behavioral and open-ended technical questions.',
    actionPoints: [
      'State your main thesis or answer directly in the first sentence.',
      'Provide the core rationale or technical explanation in the second part.',
      'Wrap up with a concise example from your college coursework or project experience.',
    ],
    iconName: 'ListOrdered',
  },

  // --- COMMON MISTAKES ---
  {
    id: 'tip-mistakes-1',
    category: 'Mistakes',
    title: 'Avoid These Critical Interview Blunders',
    description:
      'Most interview rejections for freshers stem from avoidable behavioral and preparation slip-ups.',
    actionPoints: [
      'Being Late: Test your camera, microphone, and internet connection 15 minutes before virtual calls.',
      'Not Researching the Company: Demonstrating zero familiarity with what the firm does is an instant red flag.',
      'Giving Overly Long Rambling Answers: Keep responses crisp and check in: "Would you like me to elaborate on that?"',
      'Memorizing Answers Word-for-Word: Sounds robotic; focus on remembering key themes instead.',
      'Speaking Negatively About College or Past Teams: Always maintain a positive, constructive tone.',
    ],
    iconName: 'AlertTriangle',
  },
];
