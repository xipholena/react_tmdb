import { StorageKeys } from '../enums.ts';
import { useCallback } from 'react';

const useLocalStorage = () => {
  const getStorageValue = useCallback(
    (key: StorageKeys) => localStorage.getItem(StorageKeys[key]),
    []
  );

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
