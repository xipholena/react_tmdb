import { api } from './axios.ts';
import { GenresResponse, MoviesResponse } from './interfaces.ts';

export const getMoviesByTitle = async (value: string) =>
  await api.get<MoviesResponse>(`/search/movie?query=${value}`);

export const getGenresArray = async () => await api.get<GenresResponse>(`/genre/movie/list`);
