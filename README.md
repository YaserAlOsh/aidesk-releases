# aidesk-releases


<img width="1920" height="970" alt="image" src="https://github.com/user-attachments/assets/12252487-cb08-4de7-a222-f7db01ab9157" />

*A unified workspace for AI conversations*

AIDesk is a desktop application that lets you access ChatGPT and other AI (LLM) chatbots in one place .

It is basically dedicated AI brower, enhanced with built-in tools for managing, exporting, and combining AI conversations.

Instead of opening multiple tabs, accounts, and copied prompts, MultiChat gives you one interface for many AI providers.

Note: Under development. Some features may not work, especially across different AI providers. Not everything is tested.

---

## Features

* **Multiple AI chatbots in one app**
  * Access different AI platforms from a single interface
* **Maintain chat sessions**
  * Create and manage **multiple chat sessions per AI**
  * Switch contexts instantly without losing history
  * Use private sessions for multiple accounts.
* **Import Projects Context**
  * Keep references to your development or research projects
  * Automatic refresh and import into chat context
  * Supports text files for now.
* **Chat exporting**
  * Export conversations for documentation, sharing, or archival
* **Broadcast prompts**
  * Send the same prompt to multiple AIs at once
  * Compare responses side-by-side
* **Artifacts extraction**
  * Automatically extract code blocks, markdown, latex, and html outputs.
  * Combiles latex into pdf.
* **Citation List**
  * Extracts citations from chat
  * (Under development. need to support saving and export or tool integration)
* **Vault system**
  * Store all your chat histories here, or import files (pdf or text files)
  * Supports local RAG.
  * Under development: Add support for artifacts and optimize the vectorization.
* **AI-focused browser environment**
  * Only loads supported AI platforms
  * No distractions, no tracking clutter
* **More!**
  * Customizable themes, Terminal Integration, Image processing, Automatic Nodes Workflow, and more.

---

## Why I built it

1. Separate my browsing from ChatGPT or other AI usage
2. Add all the above features to make AI more useful and easier.

As a researcher and developer, this tool helps me test different AIs for my research and for my regular use.

If you regularly work with multiple AI systems, try this tool and let me know your feedback. I am actively working on it.

#### Potential Use:

These are my ideas, you could probably come up with more interesting ways. Plus, there are some limitations discussesd below.

- Developers
  - Import your project context directly into multiple AIs
  - Link your terminal to the chat window. (It is safe, only terminal context and history are shared, but running commands from the AI requires some attention)
- Researchers
  - Maintain contexts from your papers/research work.
  - Easily produce python code and run it
  - If you research AI, maybe use the tool in your initial experiments.
- Students
  - Cross-reference AI results with each other.
  - Use artifacts and ask AI to produce visualizations or printable pdfs (with latex).
  - See which AI explains best for you.
- General users:
  - Store useful AI results (only text supported for now)
  - Switch from one AI to another if your limits are reached (f you are not a paid subscriber etc.)

---

## Platform

* Desktop application (Electron)
* Windows support (macOS/Linux planned)

## Status

This project is under active development.

Features, supported platforms, and AI integrations are evolving.
Please report bugs here and I will try to fix them as soon as possbile !

---

## Limitations

* The app uses electron, so it may eat up your ram. Preferably, close your ChatGPT (and others) active tabs in your regular browser. You only need to login in this browser once.
* Image processing is still limited. You can broadcast images to multiple AIs, but not all AI chatbots accept it gracefully, and it is slow.
* Persistent attachments support pdf, pptx, docs, and other text files but not images.
* No audio or video inputs yet.
* The automatic workflow (Nodes) has some issues with some AI provideres (notably, Grok). it is also untested on long running tasks (many nodes)
* Claude artifacts are not supported. Mostly because it has its own artifacts panel. Will be fixed in upcoming update, hopefully.
* Some features are incomplete, such as sound effects (mostly do not work yet) and \custom commands (from the settings)
* Broadcasting (injecting) long text from the prompt is slow.
* ChatGPT injection loses new lines formatting. Investigating this right now. Trying to find a balanced approach (fast and correct)
* Importing PDFs into the Vault is slow, mostly because the AI embedder is running on CPU.
* Support for Ollama (or local AI) is under develpment. It might work if you run ollama on localhost:3000 but extracting text may not work correctly.
