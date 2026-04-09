'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import ConfigPanel from './components/ConfigPanel';

const agentNames: Record<string, string> = {
  '1': 'External Meeting Prep Ag...',
  '2': 'Market Research',
  '3': 'Email Drafter',
  '4': 'Lead Enrichment',
};

export default function Home() {
  const [activeAgentId, setActiveAgentId] = useState('1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          height: '100%',
          minHeight: '85vh',
          maxHeight: '90vh',
          width: '100%',
          maxWidth: '1400px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          borderRadius: '24px', // Extra rounded corners for the outer box
        }}
      >
        {isSidebarOpen && <Sidebar activeAgentId={activeAgentId} onSelectAgent={setActiveAgentId} />}
        <ChatPanel
          agentName={agentNames[activeAgentId]}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
}
