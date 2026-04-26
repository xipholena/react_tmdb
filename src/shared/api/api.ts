import { api } from './axios.ts';
import { MoviesResponse } from './interfaces.ts';

export const getMoviesByTitle = async (value: string) =>
  await api.get<MoviesResponse>(`/search/movie?query=${value}`);
