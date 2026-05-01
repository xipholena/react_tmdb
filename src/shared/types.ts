import { AdvancedOptions } from './api/interfaces';

export type OptionalAdvancedOptions = Partial<AdvancedOptions>;
export type MoviesSearchParams = { query: string } & OptionalAdvancedOptions;
