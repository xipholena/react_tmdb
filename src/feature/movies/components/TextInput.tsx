import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styles from '../styles/TextInput.module.css';
import { useDebounceCallback } from '../../../shared/hooks/useDebounce.ts';
import useMoviesTextSearch from '../hooks/useMoviesTextSearch.ts';

const TextInput = () => {
  const [value, setValue] = useState('');
  const { data } = useMoviesTextSearch({ value });
  const handleChange = useDebounceCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e?.target?.value);
  }, 500);

  console.log('data', data);
  return (
    <div className={styles.textContainer}>
      <TextField
        id="outlined-basic"
        label="Search for movies..."
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
