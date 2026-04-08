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
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '20px 16px 16px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'var(--gradient-purple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)',
            flexShrink: 0,
          }}
        >
          ✦
        </div>
        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
          Hunt AI
        </span>
      </div>

      {/* New Agent Button */}
      <div style={{ padding: '12px' }}>
        <button
          style={{
            width: '100%',
            padding: '8px 12px',
            background: 'rgba(124, 58, 237, 0.15)',
            border: '1px solid var(--border-mid)',
            borderRadius: '8px',
            color: 'var(--accent-light)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.28)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(139, 92, 246, 0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.15)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-mid)';
          }}
        >
          <span style={{ fontSize: '16px', lineHeight: 1 }}>+</span> New agent
        </button>
      </div>

      {/* Nav Links */}
      <nav style={{ padding: '0 8px 12px' }}>
        {[
          { icon: '⊞', label: 'All agents' },
          { icon: '⚡', label: 'All activity' },
        ].map(item => (
          <button
            key={item.label}
            style={{
              width: '100%',
              padding: '8px 10px',
              background: 'transparent',
              border: 'none',
              borderRadius: '7px',
              color: 'var(--text-secondary)',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textAlign: 'left',
              transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.1)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
            }}
          >
            <span style={{ opacity: 0.7, fontSize: '14px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Pools Section */}
      <div style={{ padding: '0 12px 8px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Pools
          </span>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '16px', padding: '0 2px' }}>+</button>
        </div>
        {['User Research', 'Product Design'].map(pool => (
          <button
            key={pool}
            style={{
              width: '100%',
              padding: '6px 8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textAlign: 'left',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0, display: 'block' }} />
            {pool}
          </button>
        ))}
      </div>

      {/* Agents List */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0 8px' }}>
        <div style={{ padding: '4px 4px 8px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Agents
        </div>
        {agents.map(agent => (
          <button
            key={agent.id}
            onClick={() => onSelectAgent(agent.id)}
            style={{
              width: '100%',
              padding: '9px 10px',
              background: activeAgentId === agent.id ? 'rgba(124, 58, 237, 0.18)' : 'transparent',
              border: activeAgentId === agent.id ? '1px solid rgba(124, 58, 237, 0.3)' : '1px solid transparent',
              borderRadius: '8px',
              color: activeAgentId === agent.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textAlign: 'left',
              marginBottom: '2px',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => {
              if (activeAgentId !== agent.id) {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.08)';
              }
            }}
            onMouseLeave={e => {
              if (activeAgentId !== agent.id) {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '15px', flexShrink: 0 }}>{agent.emoji}</span>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ fontSize: '12px', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{agent.name}</div>
            </div>
            {agent.status === 'active' && (
              <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 6px rgba(16,185,129,0.7)', display: 'block' }} />
            )}
          </button>
        ))}
      </div>

      {/* Bottom Links */}
      <div style={{ padding: '12px 8px', borderTop: '1px solid var(--border-subtle)' }}>
        {[
          { icon: '📌', label: "What's new" },
          { icon: '📈', label: 'Data usage' },
          { icon: '🔌', label: 'Install Chrome extension' },
          { icon: '💬', label: 'Support' },
        ].map(item => (
          <button
            key={item.label}
            style={{
              width: '100%',
              padding: '7px 10px',
              background: 'transparent',
              border: 'none',
              borderRadius: '6px',
              color: 'var(--text-muted)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textAlign: 'left',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'; }}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
