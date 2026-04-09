import React from 'react';
import './PhaseCard.css';

interface PhaseItem {
  name: string;
  badge: string;
}

interface PhaseCardProps {
  phase: string;
  title: string;
  description: string;
  items: PhaseItem[];
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, items }) => {
  return (
    <div className="phase-card">
      <div className="phase-card-header">
        <div className="phase-card-icon">
          <PhaseIcon title={title} />
        </div>
        <div className="phase-card-title-group">
          <span className="phase-label">{phase}</span>
          <h2 className="phase-title">{title}</h2>
        </div>
      </div>

      <p className="phase-description">{description}</p>

      <div className="phase-items">
        {items.map((item, index) => (
          <PhaseItem key={index} name={item.name} badge={item.badge} />
        ))}
      </div>
    </div>
  );
};

interface PhaseItemProps {
  name: string;
  badge: string;
}

const PhaseItem: React.FC<PhaseItemProps> = ({ name, badge }) => {
  return (
    <div className="phase-item">
      <span className="phase-item-name">{name}</span>
      <span className="phase-item-badge">{badge}</span>
    </div>
  );
};

interface PhaseIconProps {
  title: string;
}

const PhaseIcon: React.FC<PhaseIconProps> = ({ title }) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle === 'planning') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (lowerTitle === 'design') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (lowerTitle === 'engineering') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17l4-8M8 17l4-8M12 17l4-8M16 17l4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (lowerTitle === 'execution') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3l14 9-14 9V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (lowerTitle === 'reporting') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
};

export default PhaseCard;