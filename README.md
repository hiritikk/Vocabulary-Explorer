# Vocabulary Explorer — nêhiyawêwin

A mobile-first web app for exploring Plains Cree vocabulary through an interactive node graph. Search a word, see how it connects to synonyms, antonyms, related categories, and word forms.

## Pages

- `index.html` — home page with search bar
- `explorer.html` — graph view, loaded with `?word=cool`

## Running locally

1. Open the project folder in VS Code or Cursor
2. Right-click `index.html` → **Open with Live Server**
3. Visit `localhost:5500` in your browser
4. Use Chrome DevTools (F12 → phone icon) to simulate mobile

## Usage

Search any supported word — currently **cool**, **walk**, or **bear** — to open the explorer. Use the filter tabs to switch between Category, Synonyms, Antonyms, and Parts of speech. Toggle between English and Cree labels using the language switch. Tap any node to see its full definition, pronunciation, and an example sentence.

## Stack

Vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.

## License

MIT
