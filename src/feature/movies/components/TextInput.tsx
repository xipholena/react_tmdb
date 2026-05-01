import TextField from '@mui/material/TextField';
import useTextInput from '../hooks/useTextInput.ts';
import style from '../styles/TextInput.module.css';

interface Props {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  setToggleAutocomplete: React.Dispatch<React.SetStateAction<boolean>>;
}
const TextInput = ({ setTextValue, textValue, setToggleAutocomplete }: Props) => {
  const { handleChange, handleKeyDown } = useTextInput({
    setTextValue,
    setToggleAutocomplete,
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
