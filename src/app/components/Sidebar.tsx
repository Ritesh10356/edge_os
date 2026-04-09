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
}

export default function Sidebar({ activeAgentId, onSelectAgent }: SidebarProps) {
  return (
    <aside
      className="app-sidebar"
      style={{
        width: '240px',
        minWidth: '240px',
        background: 'rgba(255, 255, 255, 0.015)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        borderRight: '1px solid var(--glass-border)',
        boxShadow: 'var(--shadow-premium)',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '12px 12px' }}>

        <button
          style={{
            width: '100%',
            padding: '10px 14px',
            background: 'transparent',
            border: '1px solid transparent',
            borderRadius: '10px',
            color: 'var(--text-secondary)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'var(--transition-smooth)',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.05)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span style={{ flex: 1 }}>Search chats</span>
          <div style={{
            background: 'var(--accent-red)',
            color: '#fff',
            fontSize: '9px',
            fontWeight: 800,
            padding: '2px 5px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: '0 0 10px rgba(255, 59, 48, 0.3)'
          }}>
            NEW
          </div>
        </button>
      </div>

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

        {/* Tailored To You Banner */}
        <div style={{ padding: '20px', borderTop: '1px solid var(--border-subtle)', background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.02))' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.2px' }}>
            Personalized responses
          </h4>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
            Log in to enable personal context, image generation, and file uploads.
          </p>
          <button style={{ width: '100%', padding: '10px', background: 'var(--accent-gradient)', border: 'none', borderRadius: '10px', color: '#000', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'var(--transition-smooth)', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.25)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.15)'; }}>
            Log in
          </button>
        </div>
      </div>
    </aside>
  );
}
