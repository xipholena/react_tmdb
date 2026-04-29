import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (e: any, ...args: any[]) => any;
  options: { value: string; text: string }[];
  label: string;
  size?: 'small' | 'medium';
  resetOption: string;
}

const SelectInput = ({ value, handler, options, label, size, resetOption }: Props) => {
  const safeValue = options?.some((o) => o.value === value) ? value : '';
  const selectId = `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const labelId = `${selectId}-label`;
  return (
    <>
      <InputLabel
        id={labelId}
        sx={{
          color: '#272727',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          lineHeight: '1.5rem',
        }}
      >
        {label}
      </InputLabel>
      <Select
        id={selectId}
        labelId={labelId}
        value={safeValue}
        onChange={handler}
        fullWidth
        size={size}
      >
        <MenuItem>{resetOption}</MenuItem>
        {options?.map(({ value, text }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
