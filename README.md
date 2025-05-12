# ✒️ Quill – Notes with Purpose. Built for the Future.

<div align="center">
    <img src="./public/quill_logo.png/" alt="Quill Logo" width="100" height="100" />
</div>

**Quill** is a modern, minimal note-taking app built with **Next.js 14 App Router**, **React**, **TypeScript**, and **Tailwind CSS**, styled using **shadcn/ui** components. It provides a clean and responsive interface for creating, viewing, and managing notes — fully stored in the browser with `localStorage`.

Quill is designed as the foundation for advanced features like AI-powered summarization, flashcards, voice input, and smart search.

---

## 🚀 Live Demo

[https://quill-notes.vercel.app](https://quill-notes.vercel.app) (Coming Soon!)

---

## ✨ Features

- ✅ Create, view, and delete notes
- 🔁 Persist notes in `localStorage` across sessions
- 🧩 Componentized architecture with React + TypeScript
- 🌗 Fully responsive design with light/dark theme toggle
- 💨 Built with Tailwind CSS and styled via `shadcn/ui`
- 📄 Clean folder structure using App Router conventions
- 🧠 Future-ready for AI features like summarization and flashcards

---

## 🧠 Tech Stack

| Tech         | Purpose                                |
|--------------|----------------------------------------|
| Next.js 14   | App Router, server/client separation   |
| TypeScript   | Type safety for components and data    |
| Tailwind CSS | Utility-first styling                  |
| shadcn/ui    | Accessible, customizable UI components |
| localStorage | Persistent data layer (MVP)            |
| Vercel       | Hosting and CI/CD                      |

---

## 📂 Project Structure

```

src/
├── app/               # App Router pages and layouts
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home or dashboard
│   └── dashboard/
│       └── \[id]/      # Dynamic route for note details
├── components/        # NoteForm, NoteCard, Header, etc.
├── context/           # Theme provider and app-wide context
├── lib/               # Utility logic (e.g., localStorage helpers)
├── styles/            # Tailwind/global CSS
├── types/             # TypeScript interfaces and types

```

## 📝 Data Model

```ts
// types/index.ts
export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
}
````

Notes are stored as a JSON array in localStorage under the key `"quill-notes"`.

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/quill.git
cd quill
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 🔮 Future Roadmap (Phase 2+)

| Feature                     | Integration                    |
| --------------------------- | ------------------------------ |
| 🧠 Summarize notes w/ GPT-4 | OpenAI API                     |
| 🃏 Flashcards from content  | GPT prompts                    |
| ❓ Quiz generator            | QA from text                   |
| 🗣️ Voice input & output    | Whisper / Web Speech API       |
| 🔍 Semantic search          | Embeddings (OpenAI / Pinecone) |

---

## 📸 Screenshots

> Add screenshots here once the app is styled and deployed

---

## 🧪 Testing (Optional)

> Coming soon – unit tests and component tests with React Testing Library

---

## 🧾 License

[MIT](LICENSE)

---

## 🧑‍💻 Author

Built with 💙 by Rathna
