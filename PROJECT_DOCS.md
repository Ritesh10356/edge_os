# AI Agent Chat Interface

Welcome to the AI Agent Chat Interface project! This repository contains a premium, dynamic React/Next.js frontend designed to simulate advanced Agentic workflows.

## 🌟 Key Features

### 1. High-End Dark Theme
- Sleek background palettes utilizing `#1a1c2a` and `#0d0e15`.
- Vibrant purple accents (`#9b6bfb`) for interactive elements, links, and text highlights.
- Soft white (`#e1e1e9`) typography ensuring maximum readability.

### 2. Advanced Code Block Rendering
- **Custom Syntax Highlighting**: Simulates an IDE experience (like VS Code Dark+) within the chat. 
- Parses YAML natively to apply distinct colors for `keys`, `booleans`, `strings`, `quotes`, `numbers`, and `comments`.
- **Interactive File Headers**: Features a file name identifier, SVG icons, and a highly responsive "Copy code" button.

### 3. Interactive conversational Branches
- Simulates human-like AI delays (typing indicators).
- **Action Buttons**: The AI can provide clickable options (e.g., "Continue generation of files" vs "Improve more").
- **Infinite Loops & Breaking**: The branching logic allows users to loop over refinement questions until they are satisfied and choose to proceed.

### 4. Rich Chat Bubble Structures
- Nested list items with cleanly structured indentations (`pl-6`) and custom CSS-based bullet points.
- Circular Avatars and section headers for delineating meeting attendees, tasks, or API outputs seamlessly.

## 📁 Core Components
1. **`ChatPanel.tsx`**: The main chat orchestrator. Handles input state, simulated AI delays, custom multi-branch state routing, and complex syntax block parsing.
2. **`ChatResponseBubble.tsx`**: Modular UI components (Avatars, Section Headers, Nested Lists) used to standardize the premium aesthetic across different AI responses.

## 🚀 Getting Started
Run the development server natively:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the chat UI. Try sending a quick "hello" to trigger the interactive AI generation sequence!
