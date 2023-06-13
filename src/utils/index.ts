export const memoizer = (genKey = (args: unknown[]) => JSON.stringify(args)) => {
  const mem = new Map<string, any>();
  return <T extends (...args: any[]) => any>(fn: T) => {
    const cacher = (...args: Parameters<T>): ReturnType<T> => {
      const cacheKey = genKey(args);
      const cache = mem.get(cacheKey);
      
      if (!cache) {
        const result = fn(...args);
        mem.set(cacheKey, result);
        return result
      }
  
      return cache;
    };
    cacher.cache = mem;
    return cacher;
  }
};

export const memoize = memoizer();