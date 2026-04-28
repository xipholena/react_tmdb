import { Genre } from '../../../shared/api/interfaces.ts';
import { useCallback, useEffect, useState } from 'react';
import { getGenresArray } from '../../../shared/api/api.ts';
import useLocalStorage from '../../../shared/hooks/useLocalStorage.ts';
import { StorageKeys } from '../../../shared/enums.ts';

interface Params {
  ids?: number[] | null;
}
const useGetGenres = ({ ids }: Params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { setStorageValue, getStorageValue } = useLocalStorage();

  const storedGenres: Genre[] = JSON.parse(getStorageValue(StorageKeys.genres) || '[]');

  const getGenres = useCallback(async () => {
    if (storedGenres?.length) {
      return;
    }
    try {
      setError(null);
      setIsLoading(true);
      const response = await getGenresArray();
      if (!response?.data?.genres) return;
      setStorageValue(StorageKeys.genres, response?.data?.genres);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unexpected error in fetch genres'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [setStorageValue]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  const filteredGenres = storedGenres.filter((genre) => ids?.includes(genre.id));

  return {
    isLoading,
    error,
    genres: filteredGenres,
  };
};

export default useGetGenres;
