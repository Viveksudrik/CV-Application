export function saveToStorage(key, payload) {
  localStorage.setItem(key, JSON.stringify(payload));
}
export function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
