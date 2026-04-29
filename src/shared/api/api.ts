import { api } from './axios.ts';
import { buildMoviesSearchParams } from './builders.ts';
import { Country, GenresResponse, MoviesResponse, Language, QueryParams } from './interfaces.ts';

export const fetchMovies = async (values: QueryParams) => {
  const params = buildMoviesSearchParams(values);
  return api.get<MoviesResponse>('/search/movie', { params });
};

export const fetchGenresArray = async () => await api.get<GenresResponse>(`/genre/movie/list`);

export const fetchCountries = async () => await api.get<Country[]>('/configuration/countries');

export const fetchLanguages = async () => await api.get<Language[]>('/configuration/languages');
