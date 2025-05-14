# ✅ Quill Project – Day 1 Accomplishments (May 12)

## 🔧 Project Setup & Structure
- [x] Created GitHub repo and cloned it locally
- [x] Initialized project with **Next.js 14 + App Router + TypeScript + Tailwind CSS**
- [x] Installed and configured **shadcn/ui**
- [x] Set up project folder structure:
  ```
  src/
  ├── app/
  ├── components/
  ├── context/
  ├── lib/
  ├── styles/
  └── types/
  ```

## 🧱 Component Architecture
- [x] Defined a `Note` type in `types/index.ts`
- [x] Created `NoteForm.tsx` with controlled input and textarea
- [x] Created `NoteCard.tsx` to display note data using `shadcn/ui` cards
- [x] Used `shadcn/ui` form components: `Input`, `Textarea`, `Button`, `Card`

# ✅ Quill Project – Day 2 Accomplishments (May 13)

## 💾 State Management
- [x] Implemented global state with **Zustand**
- [x] Created `noteStore.ts` with:
  - `notes` state
  - `addNote()` and `deleteNote()` functions
  - `persist` middleware for `localStorage` syncing

## 🔁 Reusability & Hooks
- [x] Created `useAddNoteWithToast()` to add a note + show toast
- [x] Created `useDeleteNoteWithConfirm()` to delete with confirm + toast

## 💬 Feedback & UX
- [x] Installed and used `sonner` (modern toast lib)
- [x] Added toast for success messages on add and delete
- [x] Added `AlertDialog` (confirmation popup) for delete button
- [x] Styled delete button using `shadcn/ui` + `lucide-react` Trash icon

## 💻 Code Quality
- [x] Removed inline logic and cleanup handlers
- [x] Structured code for scalability (hooks, store, reusable components)

## 🧠 Code Architecture Review & Cleanup
- [x] Removed `onAddNote` prop from `NoteForm` and updated `page.tsx` accordingly
- [x] Ensured `NoteForm` uses internal `useAddNoteWithToast()` hook
- [x] Cleaned up and simplified `page.tsx`:
  - Used Zustand’s `useNoteStore()` to get notes
  - Rendered notes list via `<NoteCard />`
  - Removed unused props and ensured component isolation

## ✅ Code Review Checklist
- [x] Confirmed `use client` is used at the top of `page.tsx`
- [x] Confirmed `NoteForm` is self-contained
- [x] Confirmed Zustand state is accessed cleanly
- [x] Confirmed proper key usage in map
- [x] Used Tailwind for layout (`max-w-3xl`, `p-6`, `mx-auto`, etc.)

## 💡 Suggestions (To Be Done Later)
- [x] Add empty state message when no notes are present
- [ ] Add a `Header` component for global nav (optional)
- [ ] Extract main layout container for reuse

## 📌 Summary
You didn’t just finish setup — you’ve built:
- A modular, styled, data-persistent note-taking app
- With clean UX
- Ready for dynamic routing and AI features
