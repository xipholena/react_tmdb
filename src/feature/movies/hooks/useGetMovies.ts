import { MoviesResponse, QueryParams } from '../../../shared/api/interfaces.ts';
import { useCallback, useEffect, useState } from 'react';
import { fetchMovies } from '../../../shared/api/api.ts';
import { toast } from 'react-toastify';
interface Params {
  values: QueryParams;
}
const useGetMovies = ({ values }: Params) => {
  const [data, setData] = useState<MoviesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const getMovies = useCallback(async () => {
    if (!values.query.trim()) return;

    try {
      setError(null);
      setIsLoading(true);
      const response = await fetchMovies(values);
      setData(response.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e);
        toast.error('Something went wrong while loading movies');
      } else {
        setError(new Error('Unexpected error in fetch movies'));
        toast.error('Something went wrong while loading movies');
      }
    } finally {
      setIsLoading(false);
    }
  }, [values]);

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
