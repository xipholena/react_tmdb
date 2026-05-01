import { useMemo } from 'react';
import { useDebounceValue } from '@/shared/hooks/useDebouncedValue.ts';
import { AdvancedOptions } from '@/shared/api/interfaces.ts';

interface Params {
  textValue: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<AdvancedOptions>>;
  advancedOptions: AdvancedOptions;
}
const useMovies = ({ textValue, advancedOptions, setAdvancedOptions }: Params) => {
  const debouncedTextValue = useDebounceValue(textValue, 500);

  const values = useMemo(
    () => ({
      ...advancedOptions,
      query: debouncedTextValue,
    }),
    [advancedOptions, debouncedTextValue]
  );

  const updateOptions = (key: string, value: string | number | boolean) => {
    setAdvancedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return {
    updateOptions,
    values,
  };
};

export default useMovies;
