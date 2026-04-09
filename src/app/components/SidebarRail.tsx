'use client';

import React from 'react';

interface SidebarRailProps {
  onToggleMainSidebar: () => void;
  isMainSidebarOpen: boolean;
}

export default function SidebarRail({ onToggleMainSidebar, isMainSidebarOpen }: SidebarRailProps) {
  return (
    <div 
      className="glass-panel"
      style={{
        width: 'var(--rail-width)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
        zIndex: 50,
        gap: '20px',
        borderRight: '1px solid var(--border-subtle)',
        borderLeft: 'none',
        borderTop: 'none',
        borderBottom: 'none',
        borderRadius: 0,
      }}
    >
      {/* Top Logo / Toggle */}
      <button 
        onClick={onToggleMainSidebar}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: isMainSidebarOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transition: 'var(--transition-smooth)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.08)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = isMainSidebarOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent'; }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
      </button>

      {/* Action Icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <button 
          title="New Chat"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={e => { 
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.05)'; 
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
          }}
          onMouseLeave={e => { 
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; 
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>

        <button 
          title="Search"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={e => { 
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.05)'; 
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
          }}
          onMouseLeave={e => { 
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; 
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>

      {/* Bottom Profile */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <button 
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#333',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          AX
        </button>
      </div>
    </div>
  );
}
