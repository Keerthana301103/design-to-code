import React, { useState } from 'react';
import './Sidebar.css';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  badgeVariant?: 'mvp' | 'soon';
  children?: NavItem[];
}

interface SidebarProps {
  isOpen: boolean;
  activeNav: string;
  onNavChange: (id: string) => void;
}

const ChevronIcon: React.FC<{ rotated?: boolean }> = ({ rotated }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s ease' }}
  >
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HomeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 18V12h5v6" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlanningIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8h4M8 12h4" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);

const DesignIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.67"/>
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.67"/>
  </svg>
);

const EngineeringIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10H3M17 10h-2M10 3V1M10 19v-2" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.67"/>
  </svg>
);

const ExecutionIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4l10 6-10 6V4z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReportingIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.67"/>
    <path d="M7 10v3M10 7v6M13 12v1" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);

const ConfigIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.67"/>
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);

const AssetsIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
    <path d="M4 9h12" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);

const SettingsIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 2.5l-1 2.5-2.5 1-2-1.5-2 2 1.5 2-1 2.5-2.5 1v2.5l2.5 1 1 2.5-1.5 2 2 2 2-1.5 2.5 1 1 2.5h2.5l1-2.5 2.5-1 2 1.5 2-2-1.5-2 1-2.5 2.5-1V9l-2.5-1-1-2.5 1.5-2-2-2-2 1.5-2.5-1-1-2.5H8.5z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.67"/>
  </svg>
);

const navItems: NavItem[] = [
  {
    id: 'go-to-home',
    label: 'Go to Home',
    icon: <HomeIcon />,
  },
  {
    id: 'project-home',
    label: 'Project HomePage',
    icon: <HomeIcon />,
  },
  {
    id: 'planning',
    label: 'Planning Phase',
    icon: <PlanningIcon />,
    children: [
      { id: 'research-insights', label: 'Research & Insights', icon: <></>, badge: 'MVP', badgeVariant: 'mvp' },
      { id: 'tech-doc-gen', label: 'Technical Document Generator', icon: <></>, badge: 'MVP', badgeVariant: 'mvp' },
      { id: 'work-backlog', label: 'Work Backlog Generator', icon: <></> },
      { id: 'test-strategy', label: 'Test Strategy', icon: <></> },
    ],
  },
  {
    id: 'design',
    label: 'Design Phase',
    icon: <DesignIcon />,
    children: [
      { id: 'concept-design', label: 'Concept‑to‑Design Engine', icon: <></>, badge: 'MVP', badgeVariant: 'mvp' },
      { id: 'rapid-proto', label: 'Rapid Prototyping', icon: <></>, badge: 'Soon', badgeVariant: 'soon' },
      { id: 'test-case-gen', label: 'Test Case Generation', icon: <></> },
      { id: 'test-plan-gen', label: 'Test Plan Generation', icon: <></> },
      { id: 'framework-gen', label: 'Automation Framework Generation', icon: <></> },
      { id: 'script-gen', label: 'Script Generation', icon: <></> },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering Phase',
    icon: <EngineeringIcon />,
    children: [
      { id: 'framework-scaffold', label: 'Framework Scaffold Generator', icon: <></>, badge: 'MVP', badgeVariant: 'mvp' },
      { id: 'design-to-code', label: 'Design‑to‑Code Engine', icon: <></>, badge: 'MVP', badgeVariant: 'mvp' },
    ],
  },
  {
    id: 'execution',
    label: 'Execution Phase',
    icon: <ExecutionIcon />,
    children: [
      { id: 'functional-test', label: 'Functional Test', icon: <></>, badge: 'Soon', badgeVariant: 'soon' },
      { id: 'non-functional-test', label: 'Non-Functional Test', icon: <></> },
      { id: 'test-suite-exec', label: 'Test Suite Execution', icon: <></>, badge: 'Soon', badgeVariant: 'soon' },
    ],
  },
  {
    id: 'reporting',
    label: 'Reporting Phase',
    icon: <ReportingIcon />,
    children: [
      { id: 'functional-reports', label: 'Functional Test', icon: <></>, badge: 'Soon', badgeVariant: 'soon' },
      { id: 'quality-reports', label: 'Non-Functional Test', icon: <></>, badge: 'Soon', badgeVariant: 'soon' },
    ],
  },
  {
    id: 'global-config',
    label: 'Global Configurator',
    icon: <ConfigIcon />,
    badge: 'Soon',
    badgeVariant: 'soon',
  },
  {
    id: 'env-config',
    label: 'Environment Configurator',
    icon: <ConfigIcon />,
    badge: 'Soon',
    badgeVariant: 'soon',
  },
  {
    id: 'project-assets',
    label: 'Project Assets',
    icon: <AssetsIcon />,
    badge: 'Soon',
    badgeVariant: 'soon',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
    badge: 'Soon',
    badgeVariant: 'soon',
  },
];

const Badge: React.FC<{ text: string; variant?: 'mvp' | 'soon' }> = ({ text, variant }) => (
  <span className={`sidebar-badge ${variant === 'mvp' ? 'badge-mvp' : 'badge-soon'}`}>
    {text}
  </span>
);

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onSelect: () => void;
  depth?: number;
}

const NavLink: React.FC<NavLinkProps> = ({
  item,
  isActive,
  isExpanded,
  onToggle,
  onSelect,
  depth = 0,
}) => {
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      onToggle();
    } else {
      onSelect();
    }
  };

  return (
    <button
      className={`nav-link ${isActive ? 'nav-link-active' : ''} ${depth > 0 ? 'nav-link-child' : ''}`}
      onClick={handleClick}
      aria-expanded={hasChildren ? isExpanded : undefined}
    >
      {depth === 0 && <span className="nav-link-icon">{item.icon}</span>}
      <span className="nav-link-label">{item.label}</span>
      {item.badge && <Badge text={item.badge} variant={item.badgeVariant} />}
      {hasChildren && <ChevronIcon rotated={isExpanded} />}
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeNav, onNavChange }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['planning']));

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-visible' : 'sidebar-hidden'}`}>
      {/* Logo / Brand area */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h20M1 9h20M1 17h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map(item => {
          const isExpanded = expandedItems.has(item.id);
          const isActive = activeNav === item.id;

          return (
            <div key={item.id} className="nav-item-group">
              <NavLink
                item={item}
                isActive={isActive}
                isExpanded={isExpanded}
                onToggle={() => toggleExpanded(item.id)}
                onSelect={() => onNavChange(item.id)}
              />
              {item.children && isExpanded && (
                <div className="nav-children">
                  {item.children.map(child => (
                    <NavLink
                      key={child.id}
                      item={child}
                      isActive={activeNav === child.id}
                      isExpanded={false}
                      onToggle={() => {}}
                      onSelect={() => onNavChange(child.id)}
                      depth={1}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* AI Platform Badge */}
      <div className="sidebar-footer-badge">
        <div className="ai-platform-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-1.5L8 1z" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>AI Enhanced Platform</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;