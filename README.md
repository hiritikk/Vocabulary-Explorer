# Vocabulary Explorer — nêhiyawêwin

A mobile-first web app for exploring Plains Cree vocabulary through an interactive node graph. Built for [ALTLab](https://altlab.ualberta.ca/) (University of Alberta Language Technology Lab) as part of CMPUT 302 (Winter 2026).

Search a word, see how it connects to synonyms, antonyms, related categories, and word forms — with real pronunciation audio, syllabics script, and dictionary citations.

---

## Features

- **Interactive node graph** — visualize semantic relationships between Cree words
- **Word detail** — definitions, IPA, syllabics (ᓀᐦᐃᔭᐍᐏᐣ), conjugations, example sentences
- **Pronunciation audio** — real audio via [speech-db.altlab.app](https://speech-db.altlab.app)
- **Bilingual UI** — toggle between English and Cree labels throughout
- **Bookmarks** — save words to a personal collection (per-user, persisted in localStorage)
- **Filter tabs** — switch graph view by Category, Synonyms, Antonyms, or Parts of speech
- **Auth gate** — login / register (UAlberta emails only)

---

## Pages

| File | Description |
|------|-------------|
| `login.html` | Entry point — login, register, forgot password |
| `index.html` | Search bar with fuzzy match and voice search |
| `explorer.html` | Canvas-based node graph + bottom sheet word detail |
| `word.html` | Standalone word detail page |
| `bookmarks.html` | Saved words, tap to open graph with detail pre-loaded |

---

## Running Locally

1. Clone the repo and open the folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `login.html` → **Open with Live Server**
4. Visit `localhost:5500/login.html` in your browser
5. Use Chrome DevTools → phone icon (or F12) to simulate a mobile viewport

**Demo account:** `student@ualberta.ca` / `00`

---

## Supported Words

| English | Cree | Syllabics |
|---------|------|-----------|
| cool | tahkâyâw | ᑕᐦᑳᔮᐤ |
| walk | pimohcêw | ᐱᒧᐦᒉᐤ |
| bear | maskwa | ᒪᐢᑿ |

---

## URL Parameters

- `explorer.html?word=cool` — open graph for a specific word
- `explorer.html?word=cool&open=1` — open graph and auto-open the bottom sheet (used by bookmarks)

---

## Stack

Vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.

```
dict.js       — single source of truth for all word data
js/auth.js    — Auth module: login, register, logout, bookmark toggle
```

---

## Data Sources

Dictionary entries are sourced and attributed from:
- **CW** — Cree: Words (Arok Wolvengrey)
- **MD** — Maskwacîs Dictionary
- **AECD** — Alberta Elders' Cree Dictionary
- **itwêwina** — Plains Cree Dictionary (altlab.ualberta.ca)

---

## License

MIT
