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
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {isSidebarOpen && <Sidebar activeAgentId={activeAgentId} onSelectAgent={setActiveAgentId} />}
      <ChatPanel 
        agentName={agentNames[activeAgentId]} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}
