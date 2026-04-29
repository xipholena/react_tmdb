import TextField from '@mui/material/TextField';
import styles from '../styles/TextInput.module.css';
import useTextInput from '../hooks/useTextInput.ts';

interface Props {
  setTextValue: (value: string) => void;
  textValue: string;
  setToggleAutocomplete: (value: boolean) => void;
}
const TextInput = ({ setTextValue, textValue, setToggleAutocomplete }: Props) => {
  const { handleChange, handleKeyDown } = useTextInput({
    setTextValue,
    setToggleAutocomplete,
  });
  return (
    <div className={styles.textContainer}>
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
