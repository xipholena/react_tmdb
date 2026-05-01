import type { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import useTextInput from '../hooks/useTextInput.ts';
import style from '../styles/TextInput.module.css';

interface Props {
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  setToggleAutocomplete: Dispatch<SetStateAction<boolean>>;
  setTouched: Dispatch<SetStateAction<boolean>>;
}
const TextInput = ({ setTextValue, textValue, setToggleAutocomplete, setTouched }: Props) => {
  const { handleChange, handleKeyDown } = useTextInput({
    setTextValue,
    setToggleAutocomplete,
    setTouched,
  });
  return (
    <div className={style.textContainer}>
      <TextField
        id="outlined-basic"
        label="Search for movies..."
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={textValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TextInput;
