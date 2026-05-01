import { StorageKeys } from '../enums.ts';
import { useCallback } from 'react';

const useLocalStorage = () => {
  const parseStorageArray = <T>(value: string | null): T[] => {
    try {
      return value ? JSON.parse(value) : [];
    } catch {
      return [];
    }
  };

  const getStorageValue = useCallback(<T>(key: StorageKeys) => {
    const value = localStorage.getItem(StorageKeys[key]);
    return parseStorageArray<T>(value);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setStorageValue = useCallback((key: StorageKeys, value?: any) => {
    const valueString = JSON.stringify(value);
    value && localStorage.setItem(StorageKeys[key], valueString);
  }, []);

  return {
    getStorageValue,
    setStorageValue,
  };
};

export default useLocalStorage;
