import { HRQuestion } from '../types';

export const hrQuestionsData: HRQuestion[] = [
  {
    id: 'hr-1',
    question: 'Tell me about yourself.',
    category: 'Introduction',
    howToAnswer:
      'Use the Present-Past-Future formula. Start with who you are right now (degree, major, university), highlight relevant past experiences (projects, internships, certifications, technical skills), and conclude with why you are excited about this role and company.',
    sampleAnswer:
      '"Good morning/afternoon. I am a final-year Computer Science student at XYZ University with a strong interest in software engineering and web development. Over the past three years, I have built a solid foundation in Data Structures, Java, and modern web frameworks like React.\n\nRecently, for my capstone project, I led a 3-member team to develop a campus event management portal that automated registrations for over 500 students. I also interned at ABC Solutions last summer, where I helped optimize backend APIs, improving response times by 18%.\n\nI enjoy solving algorithmic problems and learning new technologies. I am excited to apply my coding skills and enthusiasm as a fresher software engineer with your team."',
    importantTips: [
      'Keep your answer between 90 and 120 seconds.',
      'Do not just recite your resume verbatim; tell an engaging story.',
      'Focus on technical competencies and collaborative accomplishments.',
      'Avoid talking excessively about personal background or childhood.',
    ],
  },
  {
    id: 'hr-2',
    question: 'What are your strengths?',
    category: 'Self-Awareness',
    howToAnswer:
      'Select 2 to 3 genuine strengths relevant to the job (e.g. quick learner, problem solver, disciplined, strong team player). Crucially, support each claim with a concrete real-life example from college, hackathons, or coursework.',
    sampleAnswer:
      '"One of my greatest strengths is being a fast and disciplined learner. When our college team decided to enter a 36-hour hackathon, we realized the problem statement required Python and Flask, which none of us had worked with before. I spent two days going through official documentation and tutorials, quickly grasped the fundamentals, and successfully built the REST backend in time for our submission.\n\nAnother strength is my attention to detail in code quality and testing. I take the time to write clean, well-commented code with proper edge-case handling, which reduced bug reports in our academic projects."',
    importantTips: [
      'Always follow the "Claim + Story + Impact" structure.',
      'Align your strengths with the qualities needed for the job role.',
      'Avoid vague buzzwords like "hard worker" without evidence.',
    ],
  },
  {
    id: 'hr-3',
    question: 'What are your weaknesses?',
    category: 'Self-Awareness',
    howToAnswer:
      'Pick a real, non-critical weakness that does not disqualify you from the job, and emphasize the active, measurable steps you are currently taking to improve.',
    sampleAnswer:
      '"In the past, I sometimes found it difficult to say no to extra tasks, which occasionally led me to take on too many college club responsibilities at once and feel overloaded close to exams.\n\nTo address this, I started using digital project management boards (Trello) and the Eisenhower Matrix to prioritize tasks by urgency and impact. I now communicate my availability honestly and set realistic timelines. This has significantly boosted my focus and the quality of my deliverables."',
    importantTips: [
      'Never say "I have no weaknesses" or "I am too much of a perfectionist" (clichés).',
      'Never choose a weakness that is vital to the core role (e.g., "I hate writing code").',
      'Spend 20% describing the weakness and 80% explaining how you are actively overcoming it.',
    ],
  },
  {
    id: 'hr-4',
    question: 'Why should we hire you?',
    category: 'Value Proposition',
    howToAnswer:
      'Connect your technical skills, work ethic, and enthusiasm directly with what the company values. Highlight that as a fresher, you bring fresh perspectives, fast adaptability, and an eagerness to deliver impact.',
    sampleAnswer:
      '"You should hire me because I offer a strong blend of computer science fundamentals, hands-on project experience, and an eager-to-learn attitude. During my college degree, I did not just focus on theory; I built full-stack applications, participated in coding contests, and worked closely with peers.\n\nAs a fresher, I bring a high level of energy, zero preconceived biases, and a commitment to absorb your team\'s engineering practices quickly. I am ready to hit the ground running and contribute to your production code from day one."',
    importantTips: [
      'Show that you understand what the company needs.',
      'Confidence without arrogance is key.',
      'Emphasize your ability to learn quickly and adapt to company culture.',
    ],
  },
  {
    id: 'hr-5',
    question: 'Why do you want to join our company?',
    category: 'Company Fit',
    howToAnswer:
      'Demonstrate that you did your homework on the company. Mention specific products, recent company achievements, engineering culture, or training programs that genuinely appeal to you.',
    sampleAnswer:
      '"I have been following your company\'s work in cloud scalability and enterprise solutions, particularly your recent release of the open-source developer toolkit. What impressed me most is your culture of mentorship for campus hires—talking to seniors from my college who joined last year, they highlighted how junior engineers are trusted with impactful modules early on.\n\nI want to work in an environment where continuous learning is encouraged and where the software I write directly solves problems for thousands of users."',
    importantTips: [
      'Research the company\'s mission, recent news, and products beforehand.',
      'Do not say generic things like "it is a big MNC" or "for good salary".',
      'Explain how your career aspirations align with the company\'s growth.',
    ],
  },
  {
    id: 'hr-6',
    question: 'Where do you see yourself in five years?',
    category: 'Ambition & Vision',
    howToAnswer:
      'Strike a realistic balance between ambition and commitment. Frame your goal around deepening technical mastery, taking on architectural responsibilities, and mentoring newer team members.',
    sampleAnswer:
      '"Over the next five years, my goal is to evolve from an entry-level software engineer into a senior individual contributor who can design robust software systems end-to-end. In the first 1-2 years, I plan to master the tech stack, understand business requirements thoroughly, and deliver reliable features.\n\nBy year five, I envision myself taking ownership of system architecture modules, contributing to technical decisions, and mentoring incoming campus recruits."',
    importantTips: [
      'Demonstrate that you intend to grow WITH the company.',
      'Avoid unrealistic claims like "I want to be the CEO in 5 years".',
      'Focus on skill acquisition and increased responsibility.',
    ],
  },
  {
    id: 'hr-7',
    question: 'Why did you choose your course / major?',
    category: 'Motivation',
    howToAnswer:
      'Show genuine passion and intent. Explain what sparked your curiosity about the field, how your interest evolved throughout college, and how it connects to your career goals.',
    sampleAnswer:
      '"In high school, I wrote my first simple program in Python to automate renaming files on my computer, and seeing code execute and solve a real inconvenience instantly fascinated me. I chose Computer Science Engineering because I wanted to understand how software works under the hood—from data structures and compilers to cloud infrastructure.\n\nThroughout my degree, building interactive projects and debugging complex problems reaffirmed that software development is both intellectually challenging and creatively fulfilling for me."',
    importantTips: [
      'Sound enthusiastic about your discipline.',
      'Connect your academic journey to practical problem solving.',
      'If you transitioned from a non-CS branch, explain how your logical or analytical foundation helps in tech.',
    ],
  },
  {
    id: 'hr-8',
    question: 'Tell me about a challenge you faced and how you overcame it.',
    category: 'Problem Solving (STAR)',
    howToAnswer:
      'Use the STAR Method: Situation, Task, Action, Result. Highlight your initiative, analytical thinking, and persistence under unexpected roadblocks.',
    sampleAnswer:
      '"During our final year semester project, one week before the presentation deadline, our team discovered that our application crashed whenever more than 15 concurrent users submitted requests simultaneously due to unoptimized database queries (Situation/Task).\n\nI volunteered to debug the bottleneck. I profiled the slow queries using EXPLAIN ANALYZE, discovered missing foreign-key indexes, and restructured a redundant nested loop in our Node.js service (Action).\n\nAs a result, our API response time dropped from 3.2 seconds to 120ms, and the system easily handled 100 simulated concurrent users. We received an \'A\' grade and the panel commended our performance testing (Result)."',
    importantTips: [
      'Keep the Situation & Task concise (30%), spend most time on your Actions & Results (70%).',
      'Quantify the results where possible (percentages, grades, users).',
      'Focus on what YOU did, while acknowledging teammates.',
    ],
  },
  {
    id: 'hr-9',
    question: 'How do you handle pressure and tight deadlines?',
    category: 'Work Style',
    howToAnswer:
      'Show that you stay calm, break problems into manageable chunks, prioritize effectively, and maintain healthy communication rather than panicking.',
    sampleAnswer:
      '"I handle pressure by staying organized and maintaining perspective. When deadlines loom—for example, during exam week while also finishing project deliverables—I avoid panic by breaking large milestones into smaller daily checklists.\n\nI prioritize items based on critical path dependency, eliminate distractions, and check off completed sub-tasks. If an unexpected blocker arises, I immediately communicate with my team or professors so everyone is aligned. Taking short breaks to exercise or walk also helps me maintain mental clarity under pressure."',
    importantTips: [
      'Provide a realistic coping mechanism (checklists, timeboxing).',
      'Emphasize communication—staying silent until the deadline misses is a red flag.',
    ],
  },
  {
    id: 'hr-10',
    question: 'Are you comfortable working in a team?',
    category: 'Teamwork',
    howToAnswer:
      'Emphasize collaboration, respect for diverse viewpoints, active listening, and conflict resolution with a concrete college or lab example.',
    sampleAnswer:
      '"Yes, absolutely. In fact, most of my most rewarding college achievements have been team efforts. In our software engineering lab, our 4-person group had different coding habits and opinions on architectural patterns.\n\nRather than arguing, we held a quick alignment session where we documented coding standards, agreed on Git branch policies, and conducted constructive code reviews for one another. That open collaboration not only ensured we delivered our project on time, but we also learned tricks and best practices from each other."',
    importantTips: [
      'Mention active listening and conflict resolution.',
      'Show that you are dependable and place team success above personal ego.',
    ],
  },
];
