# Vocabulary Explorer — nêhiyawêwin

A mobile-first web app for exploring Plains Cree vocabulary through an interactive node graph. Built for [ALTLab](https://altlab.ualberta.ca/) (University of Alberta Language Technology Lab) as part of CMPUT 302 (Winter 2026).

Search a Cree or English word, tap **Explore** to see how it connects to related words — with pronunciation audio, syllabics script, and dictionary citations.

**Live app:** https://hiritikk.github.io/Vocabulary-Explorer

## Team Members 
| Name | CCID |
|------|-------------|
| `Hiritikk Kumar` | hiritikk |
| `` | |
| `` |  |
| `` |  |



---

## Features

- **Search** — full result cards with Cree word, syllabics, and English gloss; logo collapses on search
- **Interactive node graph** — canvas-based visualization of semantic relationships (synonyms, antonyms, categories, word forms)
- **Word detail** — definitions, IPA, syllabics (ᓀᐦᐃᔭᐍᐏᐣ), conjugations, example sentences
- **Pronunciation audio** — real recordings via [speech-db.altlab.app](https://speech-db.altlab.app)
- **Bilingual UI** — toggle between English and Cree labels (hidden during search)
- **Bookmarks** — save words to a personal collection, with remove-confirmation dialog
- **Graph filter tabs** — switch view by Category, Synonyms, Antonyms, or Parts of speech

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Search home — result cards, Explore button, language toggle |
| `explorer.html` | Canvas node graph + bottom sheet word detail |
| `word.html` | Standalone word detail page |
| `bookmarks.html` | Saved words — tap to open graph with detail pre-loaded |

> Login/auth was removed in this redesign. Bookmarks are stored in guest localStorage.

---

## Running Locally

1. Clone the repo and open the folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**
4. Visit `localhost:5500/index.html` in your browser
5. Use Chrome DevTools → phone icon to simulate a mobile viewport (430px)

---

## Supported Words

| English | Cree | Syllabics |
|---------|------|-----------|
| cool | tahkâyâw | ᑕᐦᑳᔮᐤ |
| walk | pimohcêw | ᐱᒧᐦᒉᐤ |
| bear | maskwa | ᒪᐢᑿ |

Results 3+ show a "Work in Progress" modal — full dictionary coverage is planned.

---

## URL Parameters

- `explorer.html?word=cool` — open graph for a specific word
- `explorer.html?word=cool&open=1` — open graph and auto-open the bottom sheet (used by bookmarks)

---

## Stack

Vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.

```
dict.js       — single source of truth for all word data
js/auth.js    — bookmark toggle, guest localStorage
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
