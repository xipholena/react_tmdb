import { Genre } from '../../../shared/api/interfaces.ts';
import { useCallback, useEffect, useState } from 'react';
import { fetchGenresArray } from '../../../shared/api/api.ts';
import useLocalStorage from '../../../shared/hooks/useLocalStorage.ts';
import { StorageKeys } from '../../../shared/enums.ts';
import { toast } from 'react-toastify';

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
      const response = await fetchGenresArray();
      if (!response?.data?.genres) return;
      setStorageValue(StorageKeys.genres, response?.data?.genres);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
        toast.error('Something went wrong while loading genres');
      } else {
        setError(new Error('Unexpected error in fetch genres'));
        toast.error('Something went wrong while loading genres');
      }
    } finally {
      setIsLoading(false);
    }
  }, [setStorageValue, storedGenres?.length]);

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
