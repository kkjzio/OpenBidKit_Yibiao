import { useState } from 'react';
import AppShell from './components/AppShell';
import BidDuplicateCheck from './pages/BidDuplicateCheck';
import KnowledgeBase from './pages/KnowledgeBase';
import RejectionCheck from './pages/RejectionCheck';
import TechnicalPlan from './pages/TechnicalPlan';

export type SectionId = 'technical-plan' | 'knowledge-base' | 'duplicate-check' | 'rejection-check';

const sectionMeta: Record<SectionId, { title: string; subtitle: string }> = {
  'technical-plan': {
    title: '技术方案',
    subtitle: '围绕招标要求完成技术方案生成、审阅与交付。',
  },
  'knowledge-base': {
    title: '知识库',
    subtitle: '沉淀企业能力、案例素材、标准章节和行业模板。',
  },
  'duplicate-check': {
    title: '标书查重',
    subtitle: '比对标书内容相似度，降低重复表达和合规风险。',
  },
  'rejection-check': {
    title: '废标项检查',
    subtitle: '聚焦硬性条款、格式要求和响应完整性。',
  },
};

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('technical-plan');
  const current = sectionMeta[activeSection];

  const renderPage = () => {
    switch (activeSection) {
      case 'technical-plan':
        return <TechnicalPlan />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'duplicate-check':
        return <BidDuplicateCheck />;
      case 'rejection-check':
        return <RejectionCheck />;
      default:
        return null;
    }
  };

  return (
    <AppShell
      activeSection={activeSection}
      title={current.title}
      subtitle={current.subtitle}
      onSectionChange={setActiveSection}
    >
      {renderPage()}
    </AppShell>
  );
}

export default App;
