export interface Movie {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  id: number;
  title?: string | null;
  original_language?: string | null;
  original_title?: string | null;
  overview?: string | null;
  popularity: number | null;
  poster_path?: string | null;
  release_date?: string | null;
  softcore?: boolean | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponse {
  page: number;
  results?: Movie[] | null;
  total_pages: number;
  total_results: number;
}

export interface GenresResponse {
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
