import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Language } from '@/shared/api/interfaces.ts';
import { fetchLanguages } from '@/shared/api/api.ts';
import { StorageKeys } from '@/shared/enums.ts';
import useLocalStorage from '@/shared/hooks/useLocalStorage.ts';

const useGetLanguages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { setStorageValue, getStorageValue } = useLocalStorage();

  const storedLanguages: Language[] = getStorageValue(StorageKeys.languages);

  const getLanguages = useCallback(async () => {
    if (storedLanguages?.length) {
      return;
    }
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetchLanguages();
      if (!response?.data) return;
      setStorageValue(StorageKeys.languages, response?.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
        toast.error('Something went wrong while loading languages');
      } else {
        setError(new Error('Unexpected error in fetch languages'));
        toast.error('Something went wrong while loading languages');
      }
    } finally {
      setIsLoading(false);
    }
  }, [setStorageValue, storedLanguages?.length]);

  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  return {
    isLoading,
    error,
    languages: storedLanguages,
  };
};

export default useGetLanguages;
