const Auth = (() => {
  const USERS_KEY   = 'vocab_users';
  const GUEST_EMAIL = 'guest';

  function loadUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch { return []; }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function ensureGuest() {
    const users = loadUsers();
    if (!users.find(u => u.email === GUEST_EMAIL)) {
      users.unshift({ email: GUEST_EMAIL, bookmarks: [] });
      saveUsers(users);
    }
  }

  function getGuest() {
    return loadUsers().find(u => u.email === GUEST_EMAIL);
  }

  function updateGuest(fn) {
    const users = loadUsers();
    const idx = users.findIndex(u => u.email === GUEST_EMAIL);
    if (idx < 0) return;
    fn(users[idx]);
    saveUsers(users);
  }

  function init() {
    ensureGuest();
  }

  function requireAuth() {}

  function getSession() {
    return { email: GUEST_EMAIL };
  }

  function logout() {}

  function getBookmarks() {
    const user = getGuest();
    return user ? (user.bookmarks || []) : [];
  }

  function isBookmarked(key) {
    return getBookmarks().includes(key);
  }

  function toggleBookmark(key) {
    let starred = false;
    updateGuest(user => {
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

  return { init, requireAuth, getSession, logout, getBookmarks, isBookmarked, toggleBookmark };
})();
