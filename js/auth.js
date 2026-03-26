/**
 * auth.js — shared authentication and bookmark module
 *
 * Loaded by all pages via <script src="js/auth.js"></script>
 * Provides the global Auth object.
 *
 * Storage:
 *   'vocab_users'   → [{ email, password, bookmarks: [] }, ...]
 *   'vocab_session' → { email } | null
 */

const Auth = (() => {
  const USERS_KEY   = 'vocab_users';
  const SESSION_KEY = 'vocab_session';

  const SEED_USER = { email: 'student@ualberta.ca', password: '00', bookmarks: [] };

  // ── private helpers ──────────────────────────────────────────────────────

  function loadUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch { return []; }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function findUser(email) {
    return loadUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  function currentUserEmail() {
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY));
      return s && s.email ? s.email : null;
    } catch { return null; }
  }

  function updateCurrentUser(fn) {
    const email = currentUserEmail();
    if (!email) return;
    const users = loadUsers();
    const idx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (idx < 0) return;
    fn(users[idx]);
    saveUsers(users);
  }

  // ── public API ───────────────────────────────────────────────────────────

  function init() {
    // Seed hardcoded demo user if not already in storage
    const users = loadUsers();
    if (!users.find(u => u.email === SEED_USER.email)) {
      users.unshift({ ...SEED_USER, bookmarks: [] });
      saveUsers(users);
    }
  }

  function requireAuth() {
    if (!currentUserEmail()) {
      window.location.replace('login.html');
    }
  }

  function getSession() {
    const email = currentUserEmail();
    return email ? { email } : null;
  }

  function login(email, password) {
    const user = findUser(email.trim());
    if (!user) return { ok: false, error: 'No account found for that email.' };
    if (user.password !== password) return { ok: false, error: 'Incorrect password.' };
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email }));
    return { ok: true };
  }

  function register(email, password) {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.endsWith('@ualberta.ca')) {
      return { ok: false, error: 'Only @ualberta.ca email addresses are allowed.' };
    }
    if (password.length < 2) {
      return { ok: false, error: 'Password must be at least 2 characters.' };
    }
    if (findUser(trimmed)) {
      return { ok: false, error: 'An account with that email already exists.' };
    }
    const users = loadUsers();
    users.push({ email: trimmed, password, bookmarks: [] });
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: trimmed }));
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.replace('login.html');
  }

  function getBookmarks() {
    const email = currentUserEmail();
    if (!email) return [];
    const user = findUser(email);
    return user ? (user.bookmarks || []) : [];
  }

  function isBookmarked(key) {
    return getBookmarks().includes(key);
  }

  function toggleBookmark(key) {
    let starred = false;
    updateCurrentUser(user => {
      const bm = user.bookmarks || [];
      const idx = bm.indexOf(key);
      if (idx >= 0) {
        bm.splice(idx, 1);
        starred = false;
      } else {
        bm.push(key);
        starred = true;
      }
      user.bookmarks = bm;
    });
    return starred;
  }

  return { init, requireAuth, getSession, login, register, logout, getBookmarks, isBookmarked, toggleBookmark };
})();
