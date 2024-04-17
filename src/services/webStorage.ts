const addWebStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

const removeWebStorage = (key: string) => localStorage.removeItem(key);

const getWebStorage = (key: string) => localStorage.getItem(key);

export { addWebStorage, removeWebStorage, getWebStorage };
