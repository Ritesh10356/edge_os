'use client';

import React from 'react';

interface Agent {
  id: string;
  name: string;
  emoji: string;
  status: 'active' | 'idle';
  lastMessage: string;
}

const agents: Agent[] = [
  { id: '1', name: 'External Meeting Prep', emoji: '📅', status: 'active', lastMessage: 'Analyzing calendar events...' },
  { id: '2', name: 'Market Research', emoji: '📊', status: 'idle', lastMessage: 'Completed 3 reports' },
  { id: '3', name: 'Email Drafter', emoji: '✉️', status: 'idle', lastMessage: 'Ready to assist' },
  { id: '4', name: 'Lead Enrichment', emoji: '🎯', status: 'idle', lastMessage: 'Paused' },
];

interface SidebarProps {
  activeAgentId: string;
  onSelectAgent: (id: string) => void;
  isOpen: boolean;
}

export default function Sidebar({ activeAgentId, onSelectAgent, isOpen }: SidebarProps) {
  return (
    <aside
      className="app-sidebar"
      style={{
        width: isOpen ? '240px' : '0px',
        minWidth: isOpen ? '240px' : '0px',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        background: 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        borderRight: 'none',
        boxShadow: 'none',
        position: 'relative',
        zIndex: 50,
        transition: 'var(--transition-smooth)',
      }}
    >
       {/* Chat History Section */}
      <div className="chat-history-scroll" style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ 
          fontSize: '11px', 
          fontWeight: 700, 
          color: 'var(--text-muted)', 
          marginBottom: '6px', 
          marginTop: '12px', 
          padding: '0 10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ width: '4px', height: '12px', background: 'var(--accent-red)', borderRadius: '2px' }} />
          Today
        </div>
        <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.04)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
           Refining Edge-OS Interface UI
        </button>
        <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.04)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
           External Meeting Prep Rules
        </button>
        
        <div style={{ 
          fontSize: '11px', 
          fontWeight: 700, 
          color: 'var(--text-muted)', 
          marginBottom: '6px', 
          marginTop: '20px', 
          padding: '0 10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ width: '4px', height: '12px', background: 'var(--accent-red)', borderRadius: '2px' }} />
          Previous 7 days
        </div>
        <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.04)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
           Market Research Competitor Analysis
        </button>
        <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.04)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
           Email Drafter Subject Lines
        </button>
      </div>

      {/* Bottom Footer Section */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
        
        {/* Helper Links */}
        <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.05)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            Plans & pricing
          </button>
          
          <button style={{ width: '100%', padding: '10px 12px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'var(--transition-smooth)', fontFamily: 'Inter, sans-serif' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.05)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </button>
        </div>

        {/* Removed redundant login banner for unified look */}
        <div style={{ height: '20px' }} />
      </div>
    </aside>
  );
}
