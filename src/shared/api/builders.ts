import { DEFAULT_ADVANCED_OPTIONS } from '../constants';
import { MoviesSearchParams } from '../types';
import { AdvancedOptions, QueryParams } from './interfaces';

export const buildMoviesSearchParams = (
  values: QueryParams,
  defaults: AdvancedOptions = DEFAULT_ADVANCED_OPTIONS
): MoviesSearchParams => {
  const params: MoviesSearchParams = { query: values.query };
  if (values.include_adult !== defaults.include_adult) params.include_adult = values.include_adult;
  if (values.language !== defaults.language) params.language = values.language;
  if (values.page !== defaults.page) params.page = values.page;
  if (values.region !== defaults.region) params.region = values.region;
  if (values.year !== defaults.year) params.year = values.year;
  if (values.primary_release_year !== defaults.primary_release_year) {
    params.primary_release_year = values.primary_release_year;
  }
  return params;
};
