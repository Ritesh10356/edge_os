'use client';

import React, { useState, useRef, useEffect } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  tools?: string[];
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'I\'ll send you a Slack message with comprehensive details about each external meeting participant.\n\nI\'ll send you a Slack message with comprehensive details about each external meeting participant.\n\nTo complete the setup, I need one clarification.',
    timestamp: '9:00 AM',
    tools: ['Google Calendar', 'Slack'],
  },
  {
    id: '2',
    role: 'assistant',
    content: 'Where would you like to receive the Slack notifications?\n\n• Send as a direct message to yourself, or\n• Send to a specific Slack channel?',
    timestamp: '9:00 AM',
  },
  {
    id: '3',
    role: 'user',
    content: 'Once you let me know, I\'ll finish configuring the Slack message parameters and your workflow will be ready to go!',
    timestamp: '9:02 AM',
  },
];

interface ChatPanelProps {
  agentName: string;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export default function ChatPanel({ agentName, onToggleSidebar, isSidebarOpen = true }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = '44px';
    }

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I've received your message. I'm analyzing the context and preparing a detailed response. Let me check the relevant data sources...",
        "Got it! I'll update the workflow configuration. The Slack notification settings have been saved successfully. Your agent is now ready to run on schedule.",
        "I'm searching through the connected data sources now. This should take just a moment. I'll compile a comprehensive report once I have all the information.",
        "Configuration updated! I've set up the workflow to run every morning at 8am. You'll receive detailed meeting participant summaries directly in your Slack DMs.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = '44px';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
  };

  return (
    <div
      className="app-chat"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: 'transparent',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'transparent',
          flexShrink: 0,
          borderBottom: 'none',
        }}
      >
        <button
          onClick={onToggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '0 4px',
            transform: isSidebarOpen ? 'none' : 'rotate(180deg)',
            transition: 'transform 0.2s',
          }}
        >
          ←
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {agentName}
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <AgentIconBtn emoji="⚙️" label="Settings" />
          <AgentIconBtn emoji="🔗" label="Share" />
          <AgentIconBtn emoji="📋" label="Copy" />
          <AgentIconBtn emoji="↗️" label="Open" />
          <AgentIconBtn emoji="⋯" label="More" />
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {/* Copilot Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            padding: '8px 12px',
            background: 'rgba(124, 58, 237, 0.08)',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            width: 'fit-content',
          }}
        >
          <span style={{ fontSize: '14px' }}>✦</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-light)' }}>Copilot</span>
        </div>

        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className="animate-fade-in-up"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
              animationDelay: `${idx * 0.05}s`,
            }}
          >
            {msg.tools && (
              <div style={{ display: 'flex', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
                {msg.tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '10px',
                      fontWeight: 500,
                      color: 'var(--accent-light)',
                      background: 'rgba(124, 58, 237, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '20px',
                      padding: '2px 8px',
                    }}
                  >
                    🔧 {tool}
                  </span>
                ))}
              </div>
            )}

            <div
              style={{
                maxWidth: '88%',
                padding: '12px 15px',
                borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '4px 14px 14px 14px',
                background: msg.role === 'user'
                  ? 'rgba(124, 58, 237, 0.22)'
                  : 'rgba(26, 24, 48, 0.8)',
                border: msg.role === 'user'
                  ? '1px solid rgba(124, 58, 237, 0.4)'
                  : '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '13px',
                lineHeight: '1.65',
                whiteSpace: 'pre-line',
              }}
            >
              {msg.content}
            </div>

            <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px', padding: '0 4px' }}>
              {msg.timestamp}
            </span>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '4px 14px 14px 14px',
                background: 'rgba(26, 24, 48, 0.8)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="typing-dot"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    display: 'block',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Test Send Banner */}
      <div
        style={{
          padding: '0 20px 12px',
          flexShrink: 0,
        }}
      >
        <button
          style={{
            padding: '9px 20px',
            background: 'var(--gradient-purple)',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(124, 58, 237, 0.7)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.4)'; }}
        >
          🧪 Test send
        </button>
      </div>

      {/* Input Area */}
      <div
        style={{
          padding: '0 20px 20px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: 'rgba(14, 10, 35, 0.65)',
            border: '1px solid rgba(139, 92, 246, 0.28)',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '10px',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s',
          }}
          onFocus={() => {}}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Chat with Copilot..."
            rows={1}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              resize: 'none',
              lineHeight: '1.5',
              height: '44px',
              maxHeight: '140px',
              overflowY: 'auto',
              paddingTop: '12px',
            }}
          />
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', paddingBottom: '6px' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '4px',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              title="Voice input"
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-light)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'; }}
            >
              🎤
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              style={{
                width: '34px',
                height: '34px',
                background: input.trim() ? 'var(--gradient-purple)' : 'rgba(124, 58, 237, 0.1)',
                border: '1px solid',
                borderColor: input.trim() ? 'transparent' : 'var(--border-subtle)',
                borderRadius: '8px',
                color: input.trim() ? '#fff' : 'var(--text-muted)',
                cursor: input.trim() ? 'pointer' : 'default',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: input.trim() ? '0 0 12px rgba(124, 58, 237, 0.4)' : 'none',
              }}
            >
              ↑
            </button>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '10px', color: 'var(--text-muted)', marginTop: '8px' }}>
          Hunt AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

function AgentIconBtn({ emoji, label, onClick }: { emoji: string; label: string; onClick?: () => void }) {
  return (
    <button
      title={label}
      onClick={onClick}
      style={{
        width: '30px',
        height: '30px',
        background: 'transparent',
        border: '1px solid transparent',
        borderRadius: '7px',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124, 58, 237, 0.12)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-subtle)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
      }}
    >
      {emoji}
    </button>
  );
}
