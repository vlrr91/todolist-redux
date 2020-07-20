import { useEffect } from 'react';

export default function useSaveState(store, callback) {
  useEffect(() => {
    window.addEventListener('unload', () => callback(store));

    return () => {
      window.removeEventListener('unload', callback);
    }
  }, [store, callback]);
}