export const forceRefresh = () => {
  window.location.reload(true);
};

export const clearCache = () => {
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }
};

export const refreshWithCacheClear = () => {
  clearCache();
  forceRefresh();
}; 