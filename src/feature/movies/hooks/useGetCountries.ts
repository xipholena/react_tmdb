import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Country } from '../../../shared/api/interfaces.ts';
import { fetchCountries } from '../../../shared/api/api.ts';
import { StorageKeys } from '../../../shared/enums.ts';
import useLocalStorage from '../../../shared/hooks/useLocalStorage.ts';

const useGetCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { setStorageValue, getStorageValue } = useLocalStorage();

  const storedCountries: Country[] = JSON.parse(getStorageValue(StorageKeys.countries) || '[]');

  const getCountries = useCallback(async () => {
    if (storedCountries?.length) {
      return;
    }
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetchCountries();
      if (!response?.data) return;
      setStorageValue(StorageKeys.countries, response?.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
        toast.error('Something went wrong while loading countries');
      } else {
        setError(new Error('Unexpected error in fetch countries'));
        toast.error('Something went wrong while loading countries');
      }
    } finally {
      setIsLoading(false);
    }
  }, [setStorageValue, storedCountries?.length]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return {
    isLoading,
    error,
    countries: storedCountries,
  };
};

export default useGetCountries;
