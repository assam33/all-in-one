# Secure Desktop AI Assistant

A modular, secure, voice-enabled desktop AI assistant for Windows — built in Python 3.11+.

---

## Project Structure

```
secure_ai_assistant/
│
├── main.py                     Entry point — boots security, config, logging, GUI
├── requirements.txt            All dependencies with comments
├── .env                        API keys & settings (git-ignored)
│
├── config/
│   └── settings.py             Pydantic-settings config (env vars + .env file)
│
├── src/
│   ├── gui/
│   │   └── app.py              CustomTkinter chat window — wires all subsystems
│   │
│   ├── voice/
│   │   └── voice_io.py         Whisper STT + pyttsx3 TTS (Windows SAPI5)
│   │
│   ├── ai_core/
│   │   └── orchestrator.py     LLM engine — tool-calling loop, context management
│   │
│   ├── tools/
│   │   └── builtin_tools.py    file, web_search, clipboard, shell (allowlisted)
│   │
│   ├── memory/
│   │   └── manager.py          Short-term window + ChromaDB long-term vector store
│   │
│   ├── security/
│   │   └── auth.py             PIN auth, keyring API storage, Fernet encryption,
│   │                           input sanitisation / prompt-injection blocking
│   │
│   └── logging_setup/
│       └── logger.py           structlog — JSON in production, colour in terminal
│
├── data/
│   ├── vector_store/           ChromaDB persistent files (auto-created)
│   ├── db/                     SQLite message history (auto-created)
│   └── assistant.log           Rotating log file
│
├── assets/
│   └── icons/                  Tray icon, button images
│
├── tests/
│   ├── unit/                   Isolated unit tests (mocked LLM calls)
│   └── integration/            End-to-end tool & memory tests
│
├── docs/                       Architecture notes, threat model
└── scripts/
    └── setup_keyring.py        First-run helper: store API keys securely
```

---

## Module Responsibilities

| Module | Responsibility |
|---|---|
| `config/settings.py` | Single source of truth for all settings. Reads `.env`, validates with Pydantic. |
| `src/gui/app.py` | CustomTkinter window. Spawns background threads for AI and voice. |
| `src/voice/voice_io.py` | Local Whisper STT. Windows SAPI5 TTS via pyttsx3. Non-blocking. |
| `src/ai_core/orchestrator.py` | Sends chat to OpenAI/Anthropic, executes tool calls in a loop, returns final reply. |
| `src/tools/builtin_tools.py` | Self-contained tool functions + OpenAI JSON schemas. Add new tools here. |
| `src/memory/manager.py` | Short-term sliding window for context + ChromaDB for semantic recall. |
| `src/security/auth.py` | Startup PIN, Windows Credential Manager for secrets, Fernet encryption, input sanitisation. |
| `src/logging_setup/logger.py` | Structured logging. JSON to file, colourised to terminal. |

---

## Quick Start

```bash
# 1. Create virtual environment
python -m venv .venv
.venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Store your API key securely (never in .env for production)
python scripts/setup_keyring.py

# 4. (Optional) copy and edit .env
copy .env.example .env

# 5. Run
python main.py
```

---

## Adding a New Tool

1. Write a plain Python function in `src/tools/builtin_tools.py` (or a new file).
2. Add its OpenAI function-calling JSON schema to `TOOL_SCHEMAS`.
3. Add `"function_name": your_function` to `TOOL_FUNCTIONS`.
4. It will be auto-registered at startup — no other changes needed.

---

## Security Model

- **Secrets**: API keys stored in Windows Credential Manager via `keyring`. Never in plaintext.
- **Encryption**: Memory and sensitive data encrypted at rest with AES-256 (Fernet).
- **Input sanitisation**: Prompt-injection patterns blocked before messages reach the LLM.
- **Shell allowlist**: Only specific safe commands (`dir`, `echo`, etc.) can be executed.
- **Session timeout**: Configurable idle timeout to lock the assistant.

---

## Recommended Libraries

| Layer | Library | Why |
|---|---|---|
| GUI | `customtkinter` | Modern Tkinter; no heavy Qt dependency |
| STT | `openai-whisper` | Local, private, excellent accuracy |
| TTS | `pyttsx3` | Offline, uses Windows SAPI5 natively |
| Audio | `pyaudio` | Low-level mic access |
| LLM | `openai` / `anthropic` | Tool calling, streaming |
| Orchestration | `langchain` | Chains, agents (optional) |
| Vector DB | `chromadb` | Local persistent embeddings |
| Encryption | `cryptography` | Fernet AES-256 |
| Secrets | `keyring` | Windows Credential Manager |
| Config | `pydantic-settings` | Typed, validated config from env |
| Logging | `structlog` | Structured JSON + dev console |
| Notifications | `plyer` | Native Windows toasts |
| Testing | `pytest` + `pytest-mock` | Fast unit tests with LLM mocking |
