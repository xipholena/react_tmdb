interface Params {
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setToggleAutocomplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const useTextInput = ({ setTextValue, setToggleAutocomplete }: Params) => {
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
