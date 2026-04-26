import styles from '../styles/TextInput.module.css';
import TextField from '@mui/material/TextField';

const TextInput = () => {
  return (
    <div className={styles.textContainer}>
      <TextField id="outlined-basic" label="Search for movies..." variant="outlined" fullWidth />
    </div>
  );
};

export default TextInput;
