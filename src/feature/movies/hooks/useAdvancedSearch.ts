import useGetCountries from './useGetCountries.ts';
import useGetLanguages from './useGetLanguages.ts';

const useAdvancedSearch = () => {
  const { countries } = useGetCountries();
  const { languages } = useGetLanguages();
  const countryOptions = countries.map(({ iso_3166_1, english_name }) => ({
    value: iso_3166_1,
    text: english_name,
  }));
  const languageOptions = languages.map(({ iso_639_1, english_name }) => ({
    value: iso_639_1,
    text: english_name,
  }));

  return {
    countryOptions,
    languageOptions,
  };
};

export default useAdvancedSearch;
