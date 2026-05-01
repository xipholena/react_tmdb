import type { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from 'react';
interface Params {
  setTextValue: Dispatch<SetStateAction<string>>;
  setToggleAutocomplete: Dispatch<SetStateAction<boolean>>;
  setTouched: Dispatch<SetStateAction<boolean>>;
}

const useTextInput = ({ setTextValue, setToggleAutocomplete, setTouched }: Params) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e?.target?.value);
    setToggleAutocomplete(true);
    e?.target?.value?.length && setTouched(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      setToggleAutocomplete(false);
    }
  };

  return { handleChange, handleKeyDown };
};

export default useTextInput;
