import React, { useState } from 'react';
import {
  Lightbulb,
  Building2,
  FileCheck,
  Mic,
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  Smile,
  FileText,
  Award,
  Volume2,
  ListOrdered,
  AlertTriangle,
  CheckCircle2,
  BookmarkCheck,
  CheckSquare,
  Square,
  Copy,
  Check,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

type TipSection = 'all' | 'before' | 'during' | 'resume' | 'communication' | 'mistakes';

export const TipsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<TipSection>('all');
  const [copiedChecklist, setCopiedChecklist] = useState(false);
  const { toggleTipCheck, isTipChecked } = useProgress();

  const sections = [
    { id: 'all' as TipSection, label: 'All Tips' },
    { id: 'before' as TipSection, label: 'Before the Interview' },
    { id: 'during' as TipSection, label: 'During the Interview' },
    { id: 'resume' as TipSection, label: 'Resume Tips' },
    { id: 'communication' as TipSection, label: 'Communication Tips' },
    { id: 'mistakes' as TipSection, label: 'Common Mistakes' },
  ];

  const handleCopyChecklist = () => {
    const text = `INTERVIEW PREP CHECKLIST:
[ ] 1. Research the company (products, tech stack, leadership)
[ ] 2. Review your resume line by line (projects, metrics)
[ ] 3. Practice common questions & STAR framework out loud
[ ] 4. Prepare questions to ask the interviewer
[ ] 5. Listen carefully before answering
[ ] 6. Eliminate filler words and speak clearly
[ ] 7. Ensure resume is concise (single page)
[ ] 8. Avoid critical mistakes: don't be late, don't recite memorized scripts`;
    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2000);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-2">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Expert Guidance for College Students & Freshers</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Interview Tips & Master Guide
              </h1>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Actionable guidelines covering pre-interview research, body language, resume
                formatting, speech clarity, and fatal mistakes to avoid.
              </p>
            </div>

            <button
              onClick={handleCopyChecklist}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer self-start md:self-center"
            >
              {copiedChecklist ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Checklist Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Prep Checklist</span>
                </>
              )}
            </button>
          </div>

          {/* Section Filter Tabs */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === s.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* SECTION 1: Before the Interview */}
          {(activeSection === 'all' || activeSection === 'before') && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Before the Interview</h2>
                  <p className="text-xs text-slate-500">
                    Solid preparation eliminates 80% of interview nerves.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Research the company */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span>Research the Company</span>
                    </h3>
                    <button
                      onClick={() => toggleTipCheck('before-research')}
                      className="cursor-pointer"
                    >
                      {isTipChecked('before-research') ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Understand what products they build, their core market, recent tech blogs, and
                    mission statement. Don't go into an interview asking "So what does this company do?".
                  </p>
                </div>

                {/* 2. Review your resume */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      <span>Review Your Resume</span>
                    </h3>
                    <button
                      onClick={() => toggleTipCheck('before-resume')}
                      className="cursor-pointer"
                    >
                      {isTipChecked('before-resume') ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Be ready to explain every single project, tech stack keyword, and database choice
                    you placed on paper. Never list a framework you aren't ready to answer questions about.
                  </p>
                </div>

                {/* 3. Practice common questions */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Mic className="w-4 h-4 text-blue-600" />
                      <span>Practice Common Questions</span>
                    </h3>
                    <button
                      onClick={() => toggleTipCheck('before-practice')}
                      className="cursor-pointer"
                    >
                      {isTipChecked('before-practice') ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rehearse your self-introduction, behavioral STAR stories, and core technical
                    definitions aloud so your delivery feels articulate and natural.
                  </p>
                </div>

                {/* 4. Prepare questions to ask the interviewer */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      <span>Prepare Questions to Ask</span>
                    </h3>
                    <button
                      onClick={() => toggleTipCheck('before-ask')}
                      className="cursor-pointer"
                    >
                      {isTipChecked('before-ask') ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have 2-3 genuine questions prepared about engineering team practices, tech stack
                    evolution, or onboarding for freshers to demonstrate high curiosity.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: During the Interview */}
          {(activeSection === 'all' || activeSection === 'during') && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">During the Interview</h2>
                  <p className="text-xs text-slate-500">
                    How you present your thoughts counts just as much as what you know.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-600" />
                    <span>Maintain Good Communication</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Talk through your reasoning as you write code. Let the interviewer see how you
                    dissect problems and analyze edge cases.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-indigo-600" />
                    <span>Listen Carefully</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not interrupt the interviewer. Take 2 seconds to absorb the constraints
                    before responding. Ask clarifying questions if anything is ambiguous.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <ListOrdered className="w-4 h-4 text-indigo-600" />
                    <span>Answer Clearly</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structure answers with the core conclusion first, followed by supporting reasons
                    and a concrete practical example.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-indigo-600" />
                    <span>Be Honest</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you don't know a term or API method, say so honestly. Never make up fake facts
                    or try to guess wildly in front of experienced developers.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Smile className="w-4 h-4 text-indigo-600" />
                    <span>Stay Confident</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maintain upright posture, eye contact (or look into webcam), smile warmly, and
                    remember that interviewers are rooting for you to succeed.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: Resume Tips */}
          {(activeSection === 'all' || activeSection === 'resume') && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Resume Tips for Freshers</h2>
                  <p className="text-xs text-slate-500">
                    Get shortlisted in the initial 6-second recruiter screen.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Keep Your Resume Concise</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    As a college student or fresher, your resume must strictly be 1 page. Use clean
                    headings, consistent bullet margins, and export exclusively as a PDF.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Highlight Relevant Skills</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Group skills cleanly: Programming Languages (Java, Python, C), Web (React, Node),
                    Databases (PostgreSQL, MongoDB), Tools (Git, Linux, Docker).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-teal-600" />
                    <span>Mention Impactful Projects</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    List 2 to 3 strong projects. For each, describe the problem, architecture, your
                    individual contribution, and link to a clean GitHub repo with README.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-teal-600" />
                    <span>Avoid Unnecessary Information</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remove your photo, marital status, high school club trivialities, or obvious
                    claims like "Browsing Internet". Keep every word focused on software engineering.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: Communication Tips */}
          {(activeSection === 'all' || activeSection === 'communication') && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Communication Tips</h2>
                  <p className="text-xs text-slate-500">
                    Articulate technical solutions and personal stories with clarity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-purple-600" />
                    <span>Speak Clearly</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Regulate your speaking pace. College candidates often speak too fast when
                    nervous; deliberately slowing down slightly projects calm mastery.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Mic className="w-4 h-4 text-purple-600" />
                    <span>Avoid Unnecessary Filler Words</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consciously reduce "umm", "like", "you know", "basically", and "actually". A silent
                    one-second pause sounds much more polished than a filler word.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-600" />
                    <span>Listen Before Answering</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the interviewer has finished their sentence. Paraphrase if needed: "Just to
                    confirm, the function should return true if a palindrome exists, correct?"
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <ListOrdered className="w-4 h-4 text-purple-600" />
                    <span>Keep Answers Structured</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Follow the Rule of Three or STAR method: State your answer, give 2-3 supporting
                    technical reasons, and conclude with the trade-off.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 5: Common Mistakes */}
          {(activeSection === 'all' || activeSection === 'mistakes') && (
            <div className="bg-white rounded-2xl border border-rose-200 shadow-xs p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
                  <p className="text-xs text-rose-600 font-medium">
                    Critical slip-ups that lead to immediate rejection in campus rounds.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/40 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Being Late</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Join virtual rooms 10 minutes early. Test your webcam, mic, lighting, and code
                      editor link ahead of time.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/40 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Not Researching the Company</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Failing to know what the company builds signals total indifference. Spend 30
                      minutes reading their website and recent press.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/40 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Giving Very Long Rambling Answers</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Keep behavioral answers within 2 minutes. When you reach the conclusion, stop
                      talking and allow the interviewer to guide the discussion.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/40 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Memorizing Answers Word-for-Word</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Rote scripts sound unnatural and can cause panic if you lose your train of
                      thought. Memorize bullet points and concepts, not script paragraphs.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/40 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Not Asking Questions</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      When invited to ask questions at the end, saying "No, I have no questions"
                      suggests zero enthusiasm. Always ask at least 2 thoughtful questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
