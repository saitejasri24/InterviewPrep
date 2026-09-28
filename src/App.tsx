import React, { useState } from 'react';
import { ActiveTab } from './types';
import { ProgressProvider } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AiAssistantPlaceholder } from './components/AiAssistantPlaceholder';
import { TechnicalPage } from './components/TechnicalPage';
import { HRPage } from './components/HRPage';
import { AptitudePage } from './components/AptitudePage';
import { TipsPage } from './components/TipsPage';
import { MockInterviewPage } from './components/MockInterviewPage';
import { ProgressDashboard } from './components/ProgressDashboard';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModals';

export function AppContent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [modalType, setModalType] = useState<'about' | 'contact' | 'privacy' | null>(null);

  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <FeatureCards onNavigate={handleNavigate} />
            <WhyChooseUs />
            <AiAssistantPlaceholder />
          </>
        )}

        {activeTab === 'technical' && <TechnicalPage />}

        {activeTab === 'hr' && <HRPage />}

        {activeTab === 'aptitude' && <AptitudePage />}

        {activeTab === 'tips' && <TipsPage />}

        {activeTab === 'mock' && <MockInterviewPage />}

        {activeTab === 'progress' && <ProgressDashboard onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenInfo={(type) => setModalType(type)} />

      {/* Modal Dialogs */}
      <InfoModal type={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
