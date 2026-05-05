import * as Tooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';
import type { SectionId } from '../App';
import Sidebar from './Sidebar';

interface AppShellProps {
  activeSection: SectionId;
  title: string;
  subtitle: string;
  children: ReactNode;
  onSectionChange: (section: SectionId) => void;
}

function AppShell({ activeSection, title, subtitle, children, onSectionChange }: AppShellProps) {
  return (
    <Tooltip.Provider delayDuration={120} skipDelayDuration={80}>
      <div className="app-shell">
        <Sidebar activeSection={activeSection} onSectionChange={onSectionChange} />

        <main className="main-area">
          <header className="topbar">
            <div>
              <p className="eyebrow">YIBIAO DESKTOP</p>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div className="topbar-status" aria-label="客户端状态">
              <span className="status-dot" />
              <span>独立客户端</span>
            </div>
          </header>

          <section className="content-shell" aria-label={title}>
            {children}
          </section>
        </main>
      </div>
    </Tooltip.Provider>
  );
}

export default AppShell;
