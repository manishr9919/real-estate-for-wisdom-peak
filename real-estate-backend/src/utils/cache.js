const cache = new Map();

export const setCache = (key, value, ttl = 60000) => {
  cache.set(key, { value, expiry: Date.now() + ttl });
};

export const getCache = (key) => {
  const data = cache.get(key);
  if (!data) return null;
  if (Date.now() > data.expiry) {
    cache.delete(key);
    return null;
  }
  return data.value;
};
