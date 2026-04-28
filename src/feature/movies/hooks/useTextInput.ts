import React from 'react';

interface Props {
  setTextValue: (value: string) => void;
  setToggleAutocomplete: (value: boolean) => void;
}

const useTextInput = ({ setTextValue, setToggleAutocomplete }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e?.target?.value);
    setToggleAutocomplete(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      setToggleAutocomplete(false);
    }
  };

  return { handleChange, handleKeyDown };
};

export default useTextInput;
