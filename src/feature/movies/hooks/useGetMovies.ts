import { MoviesResponse } from '../../../shared/api/interfaces.ts';
import { useCallback, useEffect, useState } from 'react';
import { getMoviesByTitle } from '../../../shared/api/api.ts';
interface Params {
  value: string;
}
const useGetMovies = ({ value }: Params) => {
  const [data, setData] = useState<MoviesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const getMovies = useCallback(async () => {
    if (!value.trim()) return;
    try {
      setError(null);
      setIsLoading(true);
      const response = await getMoviesByTitle(value);
      setData(response.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
      } else {
        setError(new Error('Unexpected error in fetch movies by value'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [value]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetMovies;
